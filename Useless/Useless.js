const useless = document.querySelector(".btn");
const header = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const wow = new Audio("wow.mp3");

useless.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("wow");

  // Got this from stack overflow
  if (wow.paused) {
    wow.play();
  } else {
    wow.currentTime = 0;
  }
});
