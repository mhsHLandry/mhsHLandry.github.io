let x1 = 0;
let x2 = 300;
let size = 50;
let y = 50;
let bg;
let xSpeed = 5;
let ySpeed = 5;

//not collided
let hit = false;
function preload(){
   mySound = loadSound('Star Wars Intro HD 1080.mp3');
  bg = loadImage('REMMY.png');
}
function setup() {
  createCanvas(800,700 );
    bg = loadImage('REMMY.png');
    mySound.setVolume(0.1);
mySound.play();
  }

function draw() {
image(img,0,0);
noLoop();
  //check for collision
  hit = collideRectRect(x1,y,size,size,x2,y,size,size);

  print(hit)


if(hit===true){
background(255,0,0);
}

else {
background(0);
  fill(123,532,143);

rect(x1,y,size,size);


fill(123,12,14);
rect(x2,y,size,size);


 }
 x1+=xSpeed;

 y = y+ySpeed;
 if(x1+size>=width || x1<=0){
 xSpeed = xSpeed*(-1);
 }
 if(x2+size>=width || x2<=0){
 xSpeed = xSpeed*(-1);
 }
 if(y>=height||y<=0){
 ySpeed = ySpeed*(-1);
 }

}
