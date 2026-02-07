const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let scale = 1;

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // YES grandit progressivement
  scale += 0.30;
  if (scale <= 5) {
    yesBtn.style.transform = `scale(${scale})`;
  }
}

// Souris (PC)
noBtn.addEventListener("mouseover", moveNoButton);

// Tactile (mobile)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Clic sur OUI → page finale
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});
