const words = [
  "malam", "ulang", "sepi", "keras", "pelan", "hitam", "putih",
  "lagi", "suara", "tenang", "nyata", "sekarang"
];
const layer = document.getElementById("floatLayer");

function spawnFloat() {
  const el = document.createElement("div");
  el.className = "float-text";
  el.textContent = words[Math.floor(Math.random() * words.length)];
  el.style.left = Math.random() * 92 + "vw";
  el.style.animationDuration = (14 + Math.random() * 16) + "s";
  el.style.animationDelay = Math.random() * 3 + "s";
  el.style.fontSize = (0.7 + Math.random() * 0.45) + "rem";
  layer.appendChild(el);
  setTimeout(() => el.remove(), 28000);
}

for (let i = 0; i < 6; i++) setTimeout(spawnFloat, i * 700);
setInterval(spawnFloat, 2500);

const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const toast = document.getElementById("toast");
let toastTimer;
function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof initMusic === "function") initMusic();
  if (typeof initForYou === "function") initForYou();
});