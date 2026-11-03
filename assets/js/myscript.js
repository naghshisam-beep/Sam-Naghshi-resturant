alert("Welcome To My Resturant Site!");
let header = document.getElementsByClassName("heading")[0];

function randomColor() {
  let color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  return color;
}

function changecolor() {
  let color = randomColor();
  header.style.color = color;
}

setInterval(changecolor, 500);
