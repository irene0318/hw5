
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
   for (var i = 0; i <= 399; i = i + 10) {
   line(199,0, i,399)
  }
}
