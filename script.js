const heading = document.getElementById("header");
const body = document.body;

const colorsHex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function changeColor() {
  body.style.background = generateColor();
  heading.innerHTML = generateColor();
}

function generateColor() {
  let color = [];

  let i;

  for (i = 0; i < 6; i++) {
    let numPick = Math.floor(Math.random() * Math.floor(15));

    color.push(colorsHex[numPick]);
  }

  let finalColor = `#${color.join("")}`;

  console.log(finalColor);

  return finalColor;
}
