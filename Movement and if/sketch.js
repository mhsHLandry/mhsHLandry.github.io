//GV
let x=100;
let y=100;
let xSpeed = 20;
let ySpeed = 20;
let size = 100;
function setup() {
  // put setup code here
createCanvas(1560,1075);

}
function draw() {
  background(214);
  //draw Rectangle
fill(255);
rect(0,0,width,height);
//draw Rectangle
fill(187,23,138);
rect(x,y,size,size);
//move Rectangle
x+=xSpeed;
y = y+ySpeed;

//never open this elepsy  warning

if(y+size>=height || y<=0){
  ySpeed = ySpeed*(-1);

 }





 if(x+size>=width || x<=0){
   xSpeed = xSpeed*(-1);


  }





}
