let faceHeight = 500;
let faceWidth = faceHeight/3*2.75;
let eyeSize = faceHeight/5.2
function setup() {
	createCanvas(1000, 800);
	rectMode(CENTER);
}

function draw(){
	rotate(50)
	background(240);
	arc(width/2-faceWidth/2,height/2-faceWidth/100,faceWidth/2.5,faceHeight/2.5,PI/2,3*PI,OPEN);
	noFill();
	arc(width/2-faceWidth/2.5,height/2-faceWidth/100,faceWidth/2.5,faceHeight/3,PI/2,3*PI,OPEN);
	//Right ear
	fill(248, 204, 169);
	arc(width/2+faceWidth/2,height/2-faceWidth/50,faceWidth/3,faceHeight/2.50,PI/2.5,3*PI,OPEN);
	noFill();
	arc(width/2+faceWidth/2.5,height/2-faceWidth/50,faceWidth/2.5,faceHeight/3,PI/2,3*PI,OPEN);
	}
