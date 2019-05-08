//global variable
  let x = 100;
  let y = 100
function setup() {
  // put setup code here
createCanvas(1950,1600);
background(120,423,0);

}

function draw() {
let x = width/4;
let y = height/4;
drawtarget(x,y);

x = 3*width/4;
drawtarget(x,y);

y = 3*height/4;
drawtarget(x,y);

x = width/4;
drawtarget(x,y);
//draw target in the center
drawtarget(width/2,height/2);
  /*
fill(185,0,0);
  rect(x,y,200,200);
  x=x+0.5;
  y=y+0.5;
  fill(200,0,210);
  ellipse(300,300,100,100);
  */
  drawtarget();
}
function drawtarget(){  fill(0);
  ellipse(width/2,height/2,200,200);
  fill(255);
  ellipse(width/2,height/2,100,100);
  fill(0);
  ellipse(width/2,height/2,50,50);
  fill(255);
  ellipse(width/2,height/2,25,25);

  drawtarget(width/2,height/2);




  }
