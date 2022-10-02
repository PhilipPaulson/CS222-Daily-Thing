const useless = document.querySelector(".btn");
const header = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");

const wow = new Audio("wow.mp3");
const thanks = new Audio("thanks.mp3");

let clicked = false;
let first = true;

useless.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");

  if (first) {
    clicked = true;

    // Got this from stack overflow
    if (wow.paused) {
      wow.play();
    } else {
      wow.currentTime = 0;
    }
  } else if (clicked) {
    // console.log("thanks");
    clicked = false;
    header.innerHTML = "Thanks for messing with the Useless button!";
    subtitle.innerHTML = "There's nothing else to do here now.";
    useless.value = "Truly Useless";
    thanks.play();
  }
});

useless.addEventListener("mouseout", (e) => {
  if (clicked && first) {
    first = false;
    // console.log("moused out");
    header.innerHTML = "Wait, no, come back!";
    subtitle.innerHTML = "Please press the button just one more time!";
  }
});
