;let level = 0;
let x;
let y;
//variables for songs
let song;
//variables for images
let img;
let img2;
let img3;
let win;
let boss;
let deathFrame; // Frame where Rusty dies
let bg;
const numEnemies =30 ;
var myPlayer;
var tempEnemy;
var myEnemies = [];
var tempBullet;
var myBullets = [];
var lives = 3;

function preload(){
  soundFormats('mp3', 'ogg');
  song = loadSound('Intro theme song.mp3');
  img = loadImage('firedude.png');
  win = loadImage('Win.png');
  img2= loadImage('pokeball.png');

  bg = loadImage('Battle floor .jpg')
  hero = loadImage('hero.png');

}


function setup() {
  // put setup code here
  createCanvas(1275,880);
song.play();
//Assign the initial values for x and y
x = width/2;
y = height/2;
myPlayer = new Player();

for (i=0; i<numEnemies; i++){
    tempEnemy = new Enemy();
    myEnemies.push(tempEnemy);
}
}


function draw(){

  if (level ===0) {
    //Show the instructions to the user
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Pokemon : a new hope', width/2, height/2);

    textSize(16);
    text('You play as a boy named rusty whos father wants him to become a sandwich maker like himself but rusty has other plans to become a pokemon trainer.', width/2, height/2+50);
    text('Press enter to continue', width/2, height/2+100);

    //If they press enter, move to the next level (game)
    if (keyIsDown(ENTER)) {
      level+=1;
    }
  }
  /*--------------------END INSTRUCTIONS--------------------*/


  /*--------------------GAME--------------------*/
  else if (level ===1) {

    //Change the background and add the character
    background(255);
    image(img,x,y);

    //Move the character based on input from the user (arrow keys)
    if (keyIsDown(RIGHT_ARROW)) {
      x+=5;
    }

    if (keyIsDown(LEFT_ARROW)) {
      x-=5;
    }

    if (keyIsDown(UP_ARROW)) {
      y-=5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      y+=5;
    }

    //If the user leaves the screen, they win so move on to the next level (win)
    if (x>width || x<0 || y>height || y<0) {
      level+=1
    }
  }
  /*--------------------END GAME--------------------*/

  /*--------------------WIN SCREEN--------------------*/
  else if (level===2) {
    //Change the backround and inform the user that they won
      background(win);

        fill(255);
        textAlign(CENTER, CENTER);
        textSize(32);
        text('The children of thanos have prevailed!!!', width/2, height/2);
        textSize(16);
        text('Press enter to play again', width/2, height/2+50);

    //If the user presses enter, reset the x and y value and reset the level to level 1 (game)
    if (keyIsDown(ENTER)) {
      x=width/2;
      y=height/2;
      level=1;
    }
  }

      /*--------------------END WIN SCREEN--------------------*/
    //check to see if enemies collide with player
    for (i=0; i<myEnemies.length; i++) {
        if (collided(myPlayer, myEnemies[i], 20)) {
            myEnemies[i].resetPos();
            lives--;
        }
    }
}
    if (lives > 0) {
        for (i=0; i<myEnemies.length; i++) {
            myEnemies[i].move();
            myEnemies[i].show();
        }
        textSize(24);
        fill(255,255,255);
        text("Lives: ", 100, 20);
        text(lives, 150, 20);
    } else {
        textSize(50);
        fill(255,255,255);
        text("YOU LOSE!!!", 600, CENTER)
    }


    for (i=0; i<myBullets.length; i++) {
        myBullets[i].move();
        myBullets[i].show();
    }

    var delete_index = -1;

    for (i=0; i<myBullets.length; i++) {
        for (j=0; j<myEnemies.length; j++) {
            if (collided(myBullets[i], myEnemies[j], 15)) {
                myEnemies.splice(j, 1);
                delete_index = i;
            }
        }
    }

    //now delete the bullet
    if (delete_index >= 0) {
        myBullets.splice(delete_index, 1);
    }

    if (myEnemies.length < 1) {
        textSize(50);
        fill(255,255,255);

    }



function mousePressed() {
    if(mouseButton == LEFT) {
        tempBullet = new Bullet(mouseX+13);
        myBullets.push(tempBullet);
        //console.log(myBullets.length);
    }
}

function collided(tempObject1, tempObject2, threshold) {
    var x_diff = width;
    var y_diff = height;
    var neg_threshold = -1 * threshold;

    x_diff = tempObject1.getX() - tempObject2.getX();
    y_diff = tempObject1.getY() - tempObject2.getY();

    if (x_diff < threshold && x_diff > neg_threshold && y_diff < threshold && y_diff > neg_threshold) {
        return true;
    } else {
        return false;
    }
}


class Player {
    constructor() {
        this.x = 0;
        this.y = height-25;
    }

    move(x_value){
        this.x = x_value;
    }

    show() {
        stroke(0,255,0);
        fill(0,255,0);
        image(hero,600,800);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

class Enemy {
    constructor() {
        this.x = random(13,width-25);
        this.y = 0;
        this.speed = random(1,2);
    }

    move() {
        if (this.y > height-30) {
            this.y = 0;
            this.x = random(13,width-25);
        }
        else {
            this.y = this.y + this.speed;
        }

    }

    show() {
        stroke(255);
        fill(255);
        ellipse(this.x, this.y, 25, 25);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    resetPos() {
        this.y = 0;
        this.x = random(13,width-25);
    }

}

class Bullet {
    constructor(x_value) {
        this.x = x_value;
        this.y = height-40;
        this.speed = 1;
    }

    move() {
        this.y = this.y - this.speed;
    }

    show() {
        stroke(0,0,255);
        fill(0,0,255);
        image(img,x,y)

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;

}
}
