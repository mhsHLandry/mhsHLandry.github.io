/*
House assignment
created by hunter
march 18 2019
*/
function setup() {
  // put setup code here
createCanvas(800,600);
}
function draw() {
let housewidth= 300;
// body of house
rect(width/2,height/2,housewidth,housewidth/2);
// roof of the house
line(width/2,height/2,width/2 + housewidth/2,height/2-housewidth/2);
line(width/2 + housewidth/2,height/2-housewidth/2,width/2 + housewidth,height/2);
let minihousewidth = housewidth/2;
//smaller house
rect(width/2,height/2,minihousewidth/2,minihousewidth/4);
//roof for smaller house
line(475,300,440,260);
/*
//window for the house
// I could not get the window with out changing the other values.
rect(450,350,100,50);
line(450,375,550,375);
line(500,350,500,400);
//door
rect(575,350,65,100);
//handle
ellipse(625,400,10,10);
//door number
ellipse(670,375,25,25);
line(675,370,665,370);
line(675,370,670,382);
*/
}
