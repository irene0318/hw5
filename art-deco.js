var x=50;
var y=0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  
  for (var i = 5; i <= 80; i = i + 15) {
    rectMode(CENTER);
    square(x, 200,i,i);
    noFill();
  }
  
   for (var i = 5; i <= 80; i = i + 15) {
    rectMode(CENTER);
    square(x+100, 200,i,i);
    noFill();
  }
  
   for (var i = 5; i <= 80; i = i + 15) {
    rectMode(CENTER);
    square(x+200, 200,i,i);
    noFill();
  }
  
  for (var i = 5; i <= 80; i = i + 15) {
    rectMode(CENTER);
    square(x+300, 200,i,i);
    noFill();
  }
  
  for (var i = 5; i <= 80; i = i + 15) {
    rectMode(CENTER);
    square(x+400, 200,i,i);
    noFill();
  }
}
