const button = document.querySelector(".sec-1-button");
const checkEmail1 = document.querySelector(".sec-1-check-mail");
const checkEmail2 = document.querySelector(".sec-3-check-mail");
const input1 = document.querySelector(".sec-1-input");
const input3 = document.querySelector(".sec-3-input");

// show email check notification
function showText(elem, input) {
  if (
    elem.classList.contains("hidden") &&
    screen.width >= 1440 &&
    input.value.includes("@")
  ) {
    elem.classList.add("visible");
  }
}

// change input border to red color
function redBorder(elem) {
  if (screen.width >= 1440) {
    elem.classList.add("border-red");
    console.log("working");
  }
}

// back to old border
function oldBorder(elem) {
  if (screen.width >= 1440) {
    elem.classList.remove("border-red");
    console.log("yeah");
  }
}
