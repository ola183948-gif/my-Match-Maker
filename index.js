const form = document.getElementById("matchForm");
const name1Input = document.getElementById("name1");
const name2Input = document.getElementById("name2");
const result = document.getElementById("result");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const scoreFill = document.getElementById("scoreFill");
const resetButton = document.getElementById("resetButton");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name1 = name1Input.value.trim();
  const name2 = name2Input.value.trim();

  if (!name1 || !name2) {
    message.textContent = "🌸 Please enter both names first!";
    scoreDisplay.textContent = "";
    scoreFill.style.width = "0%";
    return;
  }

  if (name1.toLowerCase() === name2.toLowerCase()) {
    message.textContent = "😄 Please enter two different names!";
    scoreDisplay.textContent = "";
    scoreFill.style.width = "0%";
    return;
  }

  const score = Math.floor(Math.random() * 101);

  let resultMessage;

  if (score >= 80) {
    resultMessage = "Wow! What a wonderful match! 💖✨";
  } else if (score >= 60) {
    resultMessage = "Amazing vibes! You could be a great team! 🌈";
  } else if (score >= 40) {
    resultMessage = "A fun connection! Keep spreading happiness! 🦋";
  } else {
    resultMessage = "Every connection is unique! Keep smiling! 🌸";
  }

  message.textContent =
    ${name1} + ${name2}: ${resultMessage};

  scoreDisplay.textContent = ${score}%;
  scoreFill.style.width = ${score}%;

  result.classList.remove("show");
  void result.offsetWidth;
  result.classList.add("show");
});

resetButton.addEventListener("click", function () {
  form.reset();
  message.textContent = "Your magical result will appear here!";
  scoreDisplay.textContent = "";
  scoreFill.style.width = "0%";
  result.classList.remove("show");
});