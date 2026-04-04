const surpriseBtn = document.getElementById("surpriseBtn");
const letterSection = document.getElementById("letterSection");
const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");
const errorMessage = document.getElementById("errorMessage");
const bunnySecret = document.getElementById("bunnySecret");
const bgMusic = document.getElementById("bgMusic");

let bunnyClicks = 0;
let flowersPicked = 0;

// CHANGE THIS PASSWORD
const correctPassword = "iluveyou";

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();

  if (input === correctPassword.toLowerCase()) {
    lockScreen.classList.add("hidden");
    mainSite.classList.remove("hidden");
    document.body.style.overflowY = "auto";

    // attempt autoplay after user interaction
    bgMusic.play().catch(() => {
      console.log("Autoplay blocked until further interaction");
    });
  } else {
    errorMessage.textContent = "WRONG PASSWORD LOSER";
  }
}

surpriseBtn.addEventListener("click", () => {
  letterSection.classList.toggle("hidden");
  letterSection.scrollIntoView({ behavior: "smooth" });
});

function toggleLetter(element) {
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

// BIG BUNNY EASTER EGG
bunnySecret.addEventListener("click", () => {
  bunnyClicks++;

  if (bunnyClicks === 3) {
    alert("🐰 Secret Bunny Zone Unlocked: I love you more than all the bunnies in London.");
    bunnyClicks = 0;
  }
});

// FLOWERS
function pickFlower(flower) {
  flower.style.opacity = "0.35";
  flower.style.transform = "translateY(-10px) scale(1.15)";
  flowersPicked++;

  if (flowersPicked >= 5) {
    document.getElementById("flowerMessage").textContent =
      "A bouquet that will never die for the birthday boy 🤍";
  }
}

function revealCoordinates(elementId, unlockTime) {
  const now = new Date();
  const unlock = new Date(unlockTime);

  if (now >= unlock) {
    document.getElementById(elementId).classList.remove("hidden");
  } else {
    const minsLeft = Math.ceil((unlock - now) / 60000);
    alert(`This clue unlocks in ${minsLeft} minute(s) ⏳`);
  }
}