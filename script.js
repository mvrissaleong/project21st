const surpriseBtn = document.getElementById("surpriseBtn");
const letterSection = document.getElementById("letterSection");
const cardsContainer = document.getElementById("cardsContainer");

const reasons = [
  "You make me feel safe.",
  "You always make time for me.",
  "You make ordinary days feel special.",
  "You make me laugh so much.",
  "You are so handsome to me.",
  "You are calm when I need calm.",
  "You make me feel understood.",
  "You are so smart.",
  "You care in little ways that matter.",
  "You make me feel loved.",
  "You support me.",
  "You’re fun to do life with.",
  "You’re so cute when you’re excited.",
  "You make me feel at home.",
  "You are genuinely kind.",
  "You make me feel chosen.",
  "You make me feel soft and happy.",
  "You always feel like peace.",
  "You’re my favourite person.",
  "You make the future feel exciting.",
  "I just love being yours."
];

surpriseBtn.addEventListener("click", () => {
  letterSection.classList.toggle("hidden");
  createHeartBurst();
});

reasons.forEach((reason, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${index + 1}</h3>
    <p>${reason}</p>
  `;
  cardsContainer.appendChild(card);
});

function createHeartBurst() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.fontSize = (Math.random() * 20 + 16) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}