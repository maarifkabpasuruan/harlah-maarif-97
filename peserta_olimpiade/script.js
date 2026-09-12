const CONFIG = {
  spreadsheetId: "1gqPoV3LltqK50OfG1DSNbQoGoSoDbTHW71_lf22-0qs",
  dataSheet: "Data",
  filterSheet: "Filter"
};

// Kolom sumber:
// A = No. Kursi
// B = No. Peserta
// G = Nama Peserta
// K = L/P
// U = Usia
const DATA_QUERY = "select A,B,C,G,K,U";

let allParticipants = [];
let selectedSeat = null;

const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", init);

async function init() {
  createSeats();
  bindEvents();
  await loadAppData();
}

function bindEvents() {
  $("lembagaFilter").addEventListener("change", applyFilter);
  $("resetBtn").addEventListener("click", () => {
    $("lembagaFilter").value = "";
    applyFilter();
  });
}

async function loadAppData() {
  showLoading();

  try {
    const [dataRows, institutions] = await Promise.all([
      fetchSheet(CONFIG.dataSheet, DATA_QUERY),
      fetchFilterList()
    ]);

    allParticipants = dataRows
      .map(normalizeParticipant)
      .filter(isValidParticipant);

    fillInstitutionFilter(institutions);
    applyFilter();

    $("lastUpdated").textContent =
      "Data diambil langsung dari Google Sheets";
  } catch (error) {
    console.error(error);
    showError(
      "Data belum dapat dimuat. Pastikan Google Sheet dapat diakses publik " +
      "dan nama sheet adalah \"Data\" serta \"Filter\". Detail: " + error.message
    );
    renderTable([]);
    $("resultInfo").textContent = "Gagal memuat data";
  }
}

async function fetchSheet(sheetName, query = "") {
  let url =
    `https://docs.google.com/spreadsheets/d/${CONFIG.spreadsheetId}/gviz/tq` +
    `?sheet=${encodeURIComponent(sheetName)}` +
    `&tqx=out:json`;

  if (query) {
    url += `&tq=${encodeURIComponent(query)}`;
  }

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const text = await response.text();
  return parseGviz(text);
}

async function fetchFilterList() {
  const rows = await fetchSheet(CONFIG.filterSheet, "select A");

  return [...new Set(
    rows
      .map(row => cleanValue(row[0]))
      .filter(Boolean)
  )].sort((a, b) => a.localeCompare(b, "id"));
}

function parseGviz(text) {
  // Google Visualization API returns:
  // google.visualization.Query.setResponse({...});
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("Format respons Google Sheets tidak dikenali.");
  }

  const json = JSON.parse(text.slice(start, end + 1));

  if (json.status !== "ok") {
    const message =
      json.errors?.map(e => e.detailed_message || e.message).join("; ") ||
      "Google Sheets mengembalikan error.";
    throw new Error(message);
  }

  return (json.table?.rows || []).map(row =>
    (row.c || []).map(cell => cell ? cell.v : "")
  );
}

function normalizeParticipant(row) {
  return {
    seat: cleanSeat(row[0]),          // A
    participantNo: cleanValue(row[1]), // B
    institution: cleanValue(row[2]),   // C
    name: cleanValue(row[3]),          // G
    gender: normalizeGender(row[4]),   // K
    age: cleanValue(row[5])            // U
  };
}

function isValidParticipant(p) {
  return p.name || p.participantNo || p.seat;
}

function cleanValue(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function cleanSeat(value) {
  const raw = cleanValue(value).replace(",", ".");
  const num = Number(raw);

  if (!Number.isFinite(num)) return null;
  return Math.trunc(num);
}

function normalizeGender(value) {
  const v = cleanValue(value).toUpperCase();

  if (["P", "PEREMPUAN", "F", "W"].includes(v)) return "P";
  if (["L", "LAKI-LAKI", "LAKI LAKI", "M"].includes(v)) return "L";

  return v;
}

function fillInstitutionFilter(institutions) {
  const select = $("lembagaFilter");

  select.innerHTML = '<option value="">Semua Lembaga</option>';

  institutions.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
}

function applyFilter() {
  const selectedInstitution = $("lembagaFilter").value;

  const filtered = selectedInstitution
    ? allParticipants.filter(p => p.institution === selectedInstitution)
    : allParticipants;

  renderTable(filtered);
  updateSeatOccupancy(filtered);
  $("resultInfo").textContent =
    `${filtered.length} peserta${selectedInstitution ? " • " + selectedInstitution : ""}`;
}

function renderTable(rows) {
  const body = $("pesertaBody");
  body.innerHTML = "";

  if (!rows.length) {
    body.innerHTML =
      '<tr><td colspan="5" class="empty">Tidak ada data peserta.</td></tr>';
    return;
  }

  const fragment = document.createDocumentFragment();

  rows.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.dataset.index = String(index);
    tr.dataset.seat = p.seat ?? "";
    tr.dataset.gender = p.gender;

    tr.innerHTML = `
      <td>${escapeHtml(p.seat ?? "-")}</td>
      <td>${escapeHtml(p.participantNo || "-")}</td>
      <td class="name-col">${escapeHtml(p.name || "-")}</td>
      <td>${escapeHtml(p.gender || "-")}</td>
      <td>${escapeHtml(p.age || "-")}</td>
    `;

    tr.addEventListener("click", () => selectParticipant(p, tr));
    fragment.appendChild(tr);
  });

  body.appendChild(fragment);
}

function createSeats() {
  createSeatGrid($("femaleSeats"), 140, "P");
  createSeatGrid($("maleSeats"), 80, "L");
}

function createSeatGrid(container, count, gender) {
  container.innerHTML = "";

  for (let n = 1; n <= count; n++) {
    const seat = document.createElement("button");
    seat.type = "button";
    seat.className = "seat";
    seat.dataset.seat = String(n);
    seat.dataset.gender = gender;
    seat.textContent = n;

    seat.addEventListener("click", () => {
      selectSeatFromMap(gender, n);
    });

    container.appendChild(seat);
  }
}

function updateSeatOccupancy(rows) {
  document.querySelectorAll(".seat.occupied").forEach(el => {
    el.classList.remove("occupied");
    el.title = "";
  });

  rows.forEach(p => {
    if (!p.seat || !["P", "L"].includes(p.gender)) return;

    const seat = document.querySelector(
      `.seat[data-gender="${p.gender}"][data-seat="${p.seat}"]`
    );

    if (seat) {
      seat.classList.add("occupied");
      seat.title = `${p.name} • ${p.gender} • Kursi ${p.seat}`;
    }
  });
}

function selectParticipant(participant, row) {
  document.querySelectorAll("tbody tr.active-row")
    .forEach(el => el.classList.remove("active-row"));

  row.classList.add("active-row");

  if (!participant.seat || !["P", "L"].includes(participant.gender)) {
    clearSeatSelection();
    $("selectedSeat").textContent =
      "Kursi peserta tidak valid atau L/P tidak dikenali";
    return;
  }

  highlightSeat(participant.gender, participant.seat);
  $("selectedSeat").textContent =
    `Kursi ${participant.seat} • ${participant.gender === "P" ? "Perempuan" : "Laki-laki"} • ${participant.name}`;

  scrollSeatIntoView(participant.gender, participant.seat);
}

function selectSeatFromMap(gender, seatNo) {
  highlightSeat(gender, seatNo);

  const participant = allParticipants.find(
    p => p.gender === gender && p.seat === seatNo
  );

  document.querySelectorAll("tbody tr.active-row")
    .forEach(el => el.classList.remove("active-row"));

  if (participant) {
    const rows = [...document.querySelectorAll("#pesertaBody tr")];
    const row = rows.find(tr => tr.dataset.seat === String(seatNo) &&
      tr.dataset.gender === gender);

    if (row) row.classList.add("active-row");

    $("selectedSeat").textContent =
      `Kursi ${seatNo} • ${gender === "P" ? "Perempuan" : "Laki-laki"} • ${participant.name}`;
  } else {
    $("selectedSeat").textContent =
      `Kursi ${seatNo} • ${gender === "P" ? "Perempuan" : "Laki-laki"} • belum ada peserta`;
  }
}

function highlightSeat(gender, seatNo) {
  clearSeatSelection();

  const seat = document.querySelector(
    `.seat[data-gender="${gender}"][data-seat="${seatNo}"]`
  );

  if (seat) {
    seat.classList.add("selected");
    selectedSeat = { gender, seatNo };
  }
}

function clearSeatSelection() {
  document.querySelectorAll(".seat.selected")
    .forEach(el => el.classList.remove("selected"));
  selectedSeat = null;
}

function scrollSeatIntoView(gender, seatNo) {
  // Pada mobile, bantu pengguna menemukan kursi yang disorot.
  if (window.innerWidth <= 650) {
    const seat = document.querySelector(
      `.seat[data-gender="${gender}"][data-seat="${seatNo}"]`
    );
    seat?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
}

function showLoading() {
  $("pesertaBody").innerHTML =
    '<tr><td colspan="5" class="loading">Memuat data peserta...</td></tr>';
}

function showError(message) {
  const box = $("errorBox");
  box.textContent = message;
  box.classList.remove("hidden");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
