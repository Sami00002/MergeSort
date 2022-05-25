let button;
let a = [];
let showOnlyOnce = false;
function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < 50; i++)
    a.push({
      lineHeigth: Math.floor(random(0, 100)),
      lineColorRed: Math.floor(random(255)),
      lineColorGreen: Math.floor(random(255)),
      lineColorBlue: Math.floor(random(255)),
    });

  console.log(a);
}

function draw() {
  background("pink");
  let y = 300;
  let lineWidth = 5;
  if (!showOnlyOnce) {
    for (let i = 0; i < 50; i++) {
      fill(a[i].lineColorRed, a[i].lineColorGreen, a[i].lineColorBlue);
      rect(60 + i * lineWidth + 5, y, lineWidth, -a[i].lineHeigth);
    }
  }
  button = createButton("sort");
  button.position(450, 450);
  button.mousePressed(function () {
    showOnlyOnce = false;
    a = divide(a);
  });
}

function divide(a) {
  if (a.length <= 1) return a;
  let m = Math.floor(a.length / 2);
  let left = a.slice(0, m);
  let right = a.slice(m, a.length);

  return merge(divide(left), divide(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0].lineHeigth <= right[0].lineHeigth) result.push(left.shift());
    else result.push(right.shift());
  }
  while (left.length != 0) {
    result.push(left.shift());
  }
  while (right.length != 0) {
    result.push(right.shift());
  }
  return result;
}