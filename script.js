const surpriseBtn = document.getElementById("surpriseBtn");
const letterSection = document.getElementById("letterSection");

surpriseBtn.addEventListener("click", () => {
  letterSection.classList.toggle("hidden");
  letterSection.scrollIntoView({ behavior: "smooth" });
});

function toggleEnvelope(element) {
  element.classList.toggle("open");
}