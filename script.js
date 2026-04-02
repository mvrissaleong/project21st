const surpriseBtn = document.getElementById("surpriseBtn");
const letterSection = document.getElementById("letterSection");
const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");
const errorMessage = document.getElementById("errorMessage");
const bunnySecret = document.getElementById("bunnySecret");

let bunnyClicks = 0;

// CHANGE THIS PASSWORD
const correctPassword = "iluveyou";

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();

  if (input === correctPassword.toLowerCase()) {
    lockScreen.classList.add("hidden");
    mainSite.classList.remove("hidden");
    document.body.style.overflowY = "auto";
  } else {
    errorMessage.textContent = "Wrong password... try again 🤍";
  }
}

surpriseBtn.addEventListener("click", () => {
  letterSection.classList.toggle("hidden");
  letterSection.scrollIntoView({ behavior: "smooth" });
});

function toggleEnvelope(element) {
  element.classList.toggle("open");
}

function revealFinalMessage() {
  document.getElementById("finalMessage").classList.remove("hidden");
}

function openLightbox(src) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}

// BUNNY EASTER EGG
bunnySecret.addEventListener("click", () => {
  bunnyClicks++;

  if (bunnyClicks === 5) {
    alert("🐰 Secret Bunny Zone Unlocked: I love you more than all the bunnies in London.");
    bunnyClicks = 0;
  }
});

// COUNTDOWN TIMER
// CHANGE THIS DATE/TIME TO HIS BIRTHDAY DINNER
const dinnerDate = new Date("2026-04-10T19:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = dinnerDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "It’s birthday time 🤍";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();