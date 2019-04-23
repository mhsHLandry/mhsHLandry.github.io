// Position and size variables for the blackboard
var posX = 200;
var posY = 200;
var bbWidth = 200;

// Position variables for letters
var letterX;
var letterY;

// Array to hold the letters
var letters=['N', 'a', 'm', 'e',':'];


function setup() {
  var myCanvas = createCanvas (800, 600);

}

function draw() {
  background(155,124,322);

  // draw a blackboard for writing on
  stroke(186, 145, 20);
  strokeWeight(15);
  fill(0,0,0);
  ellipse(posX, posY, bbWidth+100, bbWidth+100);

  // write white characters on the blackboard
  for (var i=0; i < letters.length; i++) {
	  noStroke();
	  fill(255);
	  letterX = (i*15) % (bbWidth - 25) + (posX + 20);
	  letterY = posY + 10 + 10 * floor((i*15) / (bbWidth - 40));
	  text(letters[i], letterX-100 , letterY-100);
  }
}

function keyPressed() {
	// When a key is pressed, check for arrow keys and move the blackboard
	if (keyCode == RIGHT_ARROW) {
		posX += 4;
	}
	else if (keyCode == LEFT_ARROW) {
		posX -=4;
	}
	else if (keyCode == UP_ARROW) {
		posY -=4;
	}
	else if (keyCode == DOWN_ARROW) {
		posY +=4;
	}
	// don't put arrow key symbols into the letters array
	else {letters.push(key);}
	return false;
}
