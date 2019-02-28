function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  for (var x=20; x<width; x = x + 20) {
    for (var y=20; y<height; y = y + 20) {
    ellipse(x,y,20,20);
  }
  }
}
