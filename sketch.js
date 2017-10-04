function setup() {
  createCanvas(850,1534);
  background(200);
  angleMode(DEGREES);
  
  frameRate(400);
}

function draw() {
  translate(width/2,height/2);
  rotate(frameCount*10);
  noStroke();

  // lerpColor blends two colors to find a third color somewhere between them.
  // lerpColor(col1,col2,amount)
  
  fill(lerpColor(color(92,0,26,10), color(6,94,79,10), frameCount/200));
  textSize(32+frameCount);
  text("*", 10, 30);
  //if (frameCount == 240) {
  //noLoop();
  //}
}
