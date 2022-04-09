function setup() {
  createCanvas(400, 400);
  //這是註解

}

function draw() {
  background(220);
   //hello world
  fill('#222222');
  textFont('Georgia');
  text('Hello world', 200, 50);
  textSize(30);

  
    fill('#22222249');
  textStyle(BOLD);
  textFont('Helvetica');
  text('Hello world', 200, 70);
  textSize(30);
  
  noFill();
  rect(30, 20, 55, 55);
  rect(60, 50, 55, 55, 20, 15, 10, 5);
  rect(100, 80, 55, 55, 20);
  ellipse(150, 130, 55, 55);
}