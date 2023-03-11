const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("randomButton");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomColor() {
  const letters = "0123456789ABCDEF";
  const color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return(color);
}

function setRandomGradient() {
  const randomColor1 = randomColor();
  const randomColor2 = randomColor();
  body.style.background =
    "linear-gradient(to right, " + randomColor1 + "," + randomColor2 + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomGradient);

body.onload = setGradient;
