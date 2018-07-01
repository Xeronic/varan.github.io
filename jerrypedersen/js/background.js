let body = document.body;
let color = "red";
let count = 0;
let maxCount = 16;

let colorInterval = setInterval(colorChanger, 30);

function colorChanger() {
  if (count === 16) {
    clearInterval(colorInterval);
    maxCount = Math.random() * 30;
    setTimeout(
      () => (colorInterval = setInterval(colorChanger, 30)),
      Math.random() * 5000
    );
    count = 0;
  }

  if (color === "red") {
    color = "blue";
  } else {
    color = "red";
  }
  body.style.backgroundColor = color;
  count++;
}
