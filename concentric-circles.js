var x=10;
var y=10;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
   for (var i = 0; i < 390; i = i + 10) {
   ellipse(200, 200, i,i)
  }
}
