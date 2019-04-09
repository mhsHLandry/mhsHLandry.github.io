//position variables
var posX = 200;
var posY = 200;
var posZ = 250;
var posA = 250;
var posT = 300;
// speed variables
var speedX = 5;
var speedY = 5;
var speedZ = 5;
var speedA = 5;
var speedT = 5;


function setup() {
 var myCanvas = createCanvas(800, 600);

 frameRate(120);

}

function draw() {
 background(0);
 triangle(posX,posY,posZ,posA,posT,posY)



}

function mouseClicked() {
   // when the user clicks the mouse,
   // put the position of the object where the mouse is
 posX = mouseX;
 posY = mouseY;
 posZ = mouseZ;
 posA = mouseA;
 posT = mouseT;
// and make the speed a small fraction of the position
 speedX = round(mouseX/100);
 speedY = round(mouseY/100);
 speedZ = round(mouseZ/100);
 speedA = round(mouseA/100);
 speedT = round(mouseT/100);













}
