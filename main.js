document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  bars.forEach((bar, index) => {
    bar.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(bar);
  });
});
/**/

const hero = document.querySelector(".animated-gradient");

let targetX = 100;
let targetY = 100;
let currentX = 100;
let currentY = 100;

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  targetX = x;
  targetY = y;
});

function animateGradient() {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  hero.style.backgroundPosition = `${currentX}% ${currentY}%`;

  requestAnimationFrame(animateGradient);
}

animateGradient();
/**/
const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const fileButton = document.getElementById("fileSelectBtn");
const fileNameDisplay = document.getElementById("fileNameDisplay");

fileButton.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    fileNameDisplay.textContent = `Vald fil: ${file.name}`;
  }
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("highlight");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("highlight");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("highlight");
  const file = e.dataTransfer.files[0];
  if (file) {
    fileInput.files = e.dataTransfer.files;
    fileNameDisplay.textContent = `Vald fil: ${file.name}`;
  }
});
/**/
const liaTextarea = document.getElementById("liaReason");
const wordCountDisplay = document.getElementById("wordCount");
const maxWords = 150;

liaTextarea.addEventListener("input", () => {
  let words = liaTextarea.value
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  if (words.length > maxWords) {
    words = words.slice(0, maxWords);
    liaTextarea.value = words.join(" ");
  }
  wordCountDisplay.textContent = `${words.length} / ${maxWords} ord`;
});

/**/
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = box.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    const rect = targetSection.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (!isVisible) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    targetSection.classList.add("blink");

    setTimeout(() => {
      targetSection.classList.remove("blink");
    }, 1000);
  });
});
