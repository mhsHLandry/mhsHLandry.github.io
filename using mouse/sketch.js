let bg;
function preload(){
  bg = loadImage('Image/REMMY.jpg');

}
function setup() {
  bg = loadImage('Image/REMMY.jpg');
 createCanvas(600, 600);  // create a square window for drawing


}

function draw() {
  // This function does nothing, but it must exist.
  background(bg);
}

function mouseMoved() {
  // This function is called whenever the mouse is moved
  rect(mouseX, mouseY, 50, 50); // Draw a square
}

function mouseClicked() {
  // This function is called whenever the mouse is clicked
  // (but the mouse must not be moving at the same time)
  // and will change the fill colour randomly
  function draw() {
    background(bg);
  ellipse(mouseX, mouseY, 50, 50); // Draw a circle
  if (mouseIsPressed) {
    // When the mouse button is pressed
    // change the colour randomly
    fill(random(155), random(355), random(250));
  }
}
  fill(random(155), random(755), random(215));
}
