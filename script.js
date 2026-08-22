const events = [
  {
    title: "Lomba Mewarnai",
    date: "Sabtu, 12 September 2026",
    time: "07.30 WIB sampai selesai",
    place: "Aula KH. Achmad Jufry – Graha PCNU Kab. Pasuruan",
    participants: "TK/RA dan KB se-Pasuruan Raya",
    desc: "Saatnya berkreasi, bermain warna, dan menunjukkan imajinasi! Mengembangkan kreativitas, ketelitian, dan keberanian anak melalui karya seni.",
    register: "https://forms.gle/ruoNvM2NvWWc1Ccg8",
    guide: "https://drive.google.com/file/d/1nym8LwQ5iR-qMpbBvOUzY7lnV4eICogo/view?usp=drive_link",
    wa: ["6285732512428", "6285774493589", "6283848497987", "6285606665266"],
    icon: "🎨"
  },
  {
    title: "Lomba Asmaul Husna",
    date: "Sabtu, 12 September 2026",
    time: "07.30 WIB sampai selesai",
    place: "Lapangan Futsal UNU Pasuruan",
    participants: "TK/RA se-Pasuruan Raya",
    desc: "Ajang untuk menumbuhkan kecintaan kepada Allah melalui hafalan Asmaul Husna, sekaligus melatih keberanian, ketekunan, dan kepercayaan diri.",
    register: "https://forms.gle/pcKmqG8xeuitREUg6",
    guide: "https://drive.google.com/file/d/1nym8LwQ5iR-qMpbBvOUzY7lnV4eICogo/view?usp=drive_link",
    wa: ["6285732512428", "6285774493589", "6283848497987", "6285606665266"],
    icon: "☪"
  },
  {
    title: "Musabaqoh Nadzom Aqidatul Awam Kontemporer",
    date: "Sabtu, 12 September 2026",
    time: "07.00 WIB sampai selesai",
    place: "Aula Rumah Inovasi Ma’arif NU Kab. Pasuruan Lantai 2 – Warungdowo",
    participants: "SD/MI se-Pasuruan Raya",
    desc: "Ruang bagi generasi muda untuk mengenal, menghafal, memahami, dan mencintai dasar-dasar aqidah Ahlussunnah wal Jamaah melalui Nadzom Aqidatul Awam secara kreatif dan edukatif.",
    register: "https://forms.gle/2vj65Pct9K3z7Lz28",
    guide: "https://drive.google.com/uc?export=download&id=10kO7eKVLfReG9Ulog9taE2oD5c0Kng6p",
    group: "https://chat.whatsapp.com/EcrbQ70wXJoDTLK9KwbS69",
    wa: ["6281331748933", "6285104930012", "62859171495189", "6287754456006"],
    icon: "📜"
  },
  {
    title: "Festival Sholawat Banjari",
    date: "Ahad, 13 September 2026",
    time: "07.00 WIB sampai selesai",
    place: "Lapangan Futsal UNU Pasuruan – Jl. Raya Warungdowo (Barat Lapangan) Pohjentrek",
    participants: "SMP/MTs se-Pasuruan Raya",
    desc: "Bersholawat, bersatu, menebarkan cinta kepada Rasulullah ﷺ melalui lantunan sholawat yang indah, penuh kekhidmatan, dan sarat nilai keislaman.",
    register: "https://forms.gle/f3326oEyaRUPCX9f9",
    guide: "https://s.id/JuknisBanjari",
    group: "https://s.id/GrupBanjari",
    wa: ["6281331748933", "6285104930012", "62859171495189", "6287754456006"],
    icon: "🥁"
  },
  {
    title: "Olimpiade Aswaja dan Matematika",
    date: "Ahad, 13 September 2026",
    time: "07.00 WIB sampai selesai",
    place: "Aula KH. Achmad Jufry – Graha PCNU Kab. Pasuruan – Warungdowo",
    participants: "SD/MI, SMP/MTs, SMA/MA/SMK",
    desc: "Menguatkan Aqidah, Mengasah Logika, Meraih Prestasi. Wadah untuk memperdalam nilai Ahlussunnah wal Jamaah sekaligus mengasah kemampuan berpikir logis, kritis, dan sistematis.",
    register: "https://forms.gle/YxcFA6xdPUvCfUvSA",
    guide: "https://drive.google.com/uc?export=download&id=1nkeVNSc0svmJAMpZPsOeXH75K_MkG1A0",
    group: "https://s.id/GrupOlimpiade2026",
    wa: ["6281332268174", "6287754456006", "6282225085508"],
    icon: "∑"
  },
  {
    title: "Olimpiade Aswaja, Shorof dan Nahwu",
    date: "Ahad, 13 September 2026",
    time: "07.00 WIB sampai selesai",
    place: "Aula KH. Achmad Jufry – Graha PCNU Kab. Pasuruan – Warungdowo",
    participants: "Madrasah Diniyah Ula",
    desc: "Menguatkan Aqidah, Memperdalam Bahasa Arab, Menghidupkan Tradisi Keilmuan Pesantren melalui penguasaan Shorof dan Nahwu.",
    register: "https://forms.gle/YxcFA6xdPUvCfUvSA",
    guide: "https://drive.google.com/uc?export=download&id=1oQjjyfRoreStH05t3wbOFgw2ZoMtH_tl",
    group: "https://s.id/GrupOlimpiade2026",
    wa: ["6281332268174", "6287754456006", "6282225085508"],
    icon: "ع"
  },
  {
    title: "Workshop dan Launching Kurikulum Madrasah Diniyah Tingkat Wustho",
    date: "1 Agustus 2026 s.d. 12 September 2026",
    time: "—",
    place: "Aula Rumah Inovasi Maarif NU Kab. Pasuruan",
    participants: "—",
    desc: "Penguatan dan pengembangan pendidikan Madrasah Diniyah Tingkat Wustho melalui workshop serta peluncuran kurikulum sebagai langkah strategis menuju pembelajaran yang lebih terarah dan sistematis.",
    icon: "📚"
  },
  {
    title: "Expo Pendidikan Maarif NU",
    date: "Sabtu–Ahad, 12–13 September 2026",
    time: "08.00–17.00 WIB",
    place: "Halaman Kantor PC LP Maarif NU Kab. Pasuruan",
    participants: "Masyarakat & insan pendidikan",
    desc: "Ruang berbagi, berinovasi, dan mengenal lebih dekat potensi, program, inovasi, serta karya lembaga pendidikan Maarif NU.",
    icon: "🏫"
  },
  {
    title: "Puncak Harlah LP Maarif NU ke-97",
    date: "Sabtu, 19 September 2026",
    time: "17.00–21.00 WIB",
    place: "Aula KH. Achmad Jufry – Graha PCNU Kab. Pasuruan",
    participants: "Undangan & insan pendidikan",
    desc: "Momentum syukur dan refleksi yang dikemas khidmat, dengan event ekshibisi, penyerahan penghargaan kepada para pemenang dan insan berprestasi, serta Maarif NU Award.",
    icon: "🏆"
  }
];

const esc = (value = "") => String(value).replace(/[&<>"']/g, c => ({
  "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
}[c]));

function waLink(numbers, title) {
  const number = numbers?.[0];
  if (!number) return "";
  const text = encodeURIComponent(`Assalamu'alaikum. Saya ingin mendapatkan informasi tentang ${title} dalam rangkaian Harlah LP Maarif NU ke-97.`);
  return `https://wa.me/${number}?text=${text}`;
}

function renderEvents() {
  const grid = document.querySelector("#eventGrid");
  grid.innerHTML = events.map((event, index) => {
    const actions = [];
    if (event.register) actions.push(`<a class="btn btn-register" target="_blank" rel="noopener noreferrer" href="${esc(event.register)}">Daftar Sekarang ↗</a>`);
    if (event.guide) actions.push(`<a class="btn btn-doc" target="_blank" rel="noopener noreferrer" href="${esc(event.guide)}">Juknis ↗</a>`);
    if (event.group) actions.push(`<a class="btn btn-wa" target="_blank" rel="noopener noreferrer" href="${esc(event.group)}">Grup WhatsApp ↗</a>`);
    const contact = waLink(event.wa, event.title);
    if (contact) actions.push(`<a class="btn btn-wa" target="_blank" rel="noopener noreferrer" href="${esc(contact)}">Kontak WhatsApp</a>`);

    return `
      <article class="event-card reveal">
        <div class="event-top">
          <div class="event-icon" aria-hidden="true">${event.icon}</div>
          <span class="event-no">${String(index + 1).padStart(2, "0")} / ${events.length}</span>
        </div>
        <h3>${esc(event.title)}</h3>
        <div class="meta">
          <div class="meta-row"><b>Tanggal</b><span>${esc(event.date)}</span></div>
          ${event.time !== "—" ? `<div class="meta-row"><b>Waktu</b><span>${esc(event.time)}</span></div>` : ""}
          <div class="meta-row"><b>Tempat</b><span>${esc(event.place)}</span></div>
          ${event.participants !== "—" ? `<div class="meta-row"><b>Peserta</b><span>${esc(event.participants)}</span></div>` : ""}
        </div>
        <p class="event-desc">${esc(event.desc)}</p>
        ${actions.length ? `<div class="event-actions">${actions.join("")}</div>` : ""}
      </article>
    `;
  }).join("");

  observeReveals();
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(el => observer.observe(el));
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
}, { passive: true });
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

renderEvents();
observeReveals();
