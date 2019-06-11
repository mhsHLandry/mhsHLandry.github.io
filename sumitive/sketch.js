let level = 0;
let x;
let y;
//variables for songs
let song;
let battlesong;
//variables for images
let img;
let img2;
let img3;
let win;

function preload(){
  soundFormats('mp3', 'ogg');
  song = loadSound('Intro theme song.mp3');
  img = loadImage('Images.png');
  win = loadImage('Win.png');
  battlesong = loadsound('Battle song.mp3')
}
function setup() {
  // put setup code here
  createCanvas(1275,880);
song.play();
//Assign the initial values for x and y
x = width/2;
y = height/2;
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
    song.stop();
  }
  /*--------------------END INSTRUCTIONS--------------------*/


  /*--------------------GAME--------------------*/
  battlesong.play();
  else if (level ===1) {

    //Change the background and add the character
    background(255,423,123);
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
    battlesong.stop();
    else if (level===2) {
      //Change the background and add the character
      background(255,20,123);
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
        level+=2
      }
  }

  /*--------------------WIN SCREEN--------------------*/
  else if (level===3) {
    //Change the backround and inform the user that they won
      background(win);

        fill(255);
        textAlign(CENTER, CENTER);
        textSize(32);
        text('You have become a pokemon master', width/2, height/2+100);
        textSize(16);
        text('Press enter to play again', width/2, height/2+150);

    //If the user presses enter, reset the x and y value and reset the level to level 1 (game)
    if (keyIsDown(ENTER)) {
      x=width/2;
      y=height/2;
      level=1;
    }
  }
  /*--------------------END WIN SCREEN--------------------*//*
    function mousePressed(){
    if(song.isPlaying()){
      song.paused();
    }else{
      song.play();
  }
*/
/*//First area
//Houses
rect(0,350,123,250);
rect(200,350,123,250);
rect(400,350,123,250);
rect(600,350,123,250);
rect(800,350,123,250);
*/
}
}
