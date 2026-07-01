// TYPEWRITER
const words = [
  "Empowering Creativity...",
  "Building Entrepreneurs...",
  "Transforming Communities..."
];

let i = 0, j = 0, isDeleting = false;
const el = document.getElementById("type");

function type() {
  const word = words[i];

  el.textContent = word.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > word.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();

// MENU TOGGLE
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// FORM
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Application submitted successfully!");
});
