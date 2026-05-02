const hello_text = document.getElementById("hello");
const first_question = document.getElementById("first-question");
const firstOkButton = document.getElementById("fist-ok-button");
const no_button = document.getElementById("no-button");
const thankYou = document.getElementById("thank-you");
const flowersBtn = document.getElementById("flowers-btn");
const smile_please = document.getElementById("smile-please");
const capture = document.getElementById("capture");
const siroPhoto = document.getElementById("siro-photo");
const message = document.getElementById("message");
const love = document.getElementById("love");

function showQuestion() {
  hello_text.hello_text = true;
  first_question.hidden = true;
  setTimeout(() => {
    hello_text.hidden = false;
  }, 400);
  setTimeout(() => {
    hello_text.hidden = true;
    first_question.hidden = false;
  }, 3000);
}

function clickNo() {
  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  let topClick = getRandom(0, 500 - 200);
  let leftClick = getRandom(0, 500 - 200);
  no_button.style.position = "absolute";
  no_button.style.top = `${topClick}px`;
  no_button.style.left = `${leftClick}px`;
}

no_button.addEventListener("click", () => {
  clickNo();
});

showQuestion();

firstOkButton.addEventListener("click", () => {
  console.log("clicked");
  first_question.hidden = true;
  thankYou.style.display = "flex";
});

flowersBtn.addEventListener("click", () => {
  thankYou.style.display = "none";
  smile_please.style.display = "flex";
});

capture.addEventListener("click", () => {
  smile_please.style.display = "none";
  siroPhoto.style.display = "block";
  setTimeout(() => {
    siroPhoto.style.display = "none";
    message.hidden = false;
    setTimeout(() => {
      message.hidden = true;
      love.hidden = false;
    }, 13000);
  }, 8500);
});
