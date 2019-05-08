
//position variables
var posX = 200;
var posY = 200;
// speed variables
var speedX = 0;
var speedY = 0;
//size
var size = 100

function setup() {
  var myCanvas = createCanvas(600, 600);
  frameRate(30);
}

function draw() {
  background(0);
rect(posX,posY,100,100);
  posX = posX + speedX;
  posY = posY + speedY;

  if(posX+size>=height || posX<=0){
speedX = speedX*(-1);

  }

  if(posY+size>=height || posY<=0){
  speedY = speedY*(-1);

  }

}

function mouseClicked() {
  posX = mouseX;
  posY = mouseY;
  speedX = round(mouseX/100);
  speedY = round(mouseY/100);
}
