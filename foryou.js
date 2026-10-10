const messages = [
  "Kalau kamu lagi ngerasa berat, boleh duduk sebentar di sini. Gak usah buru-buru.",
  "Hari ini gak harus sempurna. Cukup kamu masih di sini aja udah cukup.",
  "Kadang yang kamu butuhin cuma satu lagu dan sedikit hening.",
  "Kamu gak sendirian, meski kadang kerasa begitu.",
  "Istirahat itu juga bagian dari jalan. Bukan tanda kalah.",
  "Kalau lagi kosong, putar lagu favorit mu. Biar kepala agak lega.",
  "Gak semua harus dijelaskan. Beberapa hal cukup dirasain aja.",
  "Kamu boleh capek. Kamu juga boleh bangkit pelan-pelan."
];

function initForYou() {
  let msgIndex = 0;
  const msgEl = document.getElementById("foryouMsg");
  const btnNext = document.getElementById("btnNext");
  const btnCopy = document.getElementById("btnCopy");

  if (!msgEl || !btnNext || !btnCopy) return;

  btnNext.addEventListener("click", () => {
    msgEl.classList.add("fade");
    setTimeout(() => {
      msgIndex = (msgIndex + 1) % messages.length;
      msgEl.textContent = messages[msgIndex];
      msgEl.classList.remove("fade");
    }, 280);
  });

  btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(msgEl.textContent).then(() => {
      if (typeof showToast === "function") showToast("pesan disalin");
    }).catch(() => {
      if (typeof showToast === "function") showToast("gagal nyalin");
    });
  });
}