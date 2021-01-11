const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colours = document.querySelectorAll(".jsColour");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColourClick(event) {
  const colour = event.target.style.backgroundColour;
  ctx.strokeStyle = colour;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
console.log(Array.from(colours));
Array.from(colours).forEach((colour) =>
  colour.addEventListener("click", handleColourClick)
);
