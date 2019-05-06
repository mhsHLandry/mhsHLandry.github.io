


var userName = prompt("Welcome to Rock Paper Scissors vs Thanos! What is your name?");
var playCount = prompt("How many times should the winner win? Enter a number.");
var thanosChoice;
var user_count = 0;
var thanos_count = 0;

function preload() {
  Scissors = loadImage('Scissors.png'); // image of scissors preloaded
  Rock = loadImage('Rock.png'); // image of rock preloaded
  Paper = loadImage('Paper.png'); // image of paper preloaded
  Scissors2 = loadImage('Scissors.png'); // image of scissors (user's perspective) preloaded
  Rock2 = loadImage('Rock.png'); // image of rock (user's perspective) preloaded
  Paper2 = loadImage('Paper.png'); // image of paper (user's perspective) preloaded
  Scissors3 = loadImage('Scissors.png'); // image of scissors (for button below) preloaded
  Rock3 = loadImage('Rock.png'); // image of rock (for button below) preloaded
  Paper3 = loadImage('Paper.png'); // image of paper (for button below) preloaded
  Win = loadImage('Win.png'); // image of "win" sign preloaded
  Lost = loadImage('Lose.png'); // image of "lost" sign preloaded
}

// function that mixes up & executes the thanos's move
function mix() {
  thanosChoice = Math.random();
  if (0 < thanosChoice && thanosChoice <= 0.33) { // 30% possibility to get Rock
    thanosChoice = "Rock";
  } else if (0.34 <thanosChoice && thanosChoice < 0.66) { // 30% possibility to get Paper
    thanosChoice = "Paper";
  } else {
    thanosChoice = "Scissors"; // The rest (30%) to get Scissors
  }
}

function setup() {
  createCanvas(1400, 800); // canvas size set to 1200 * 600
  background('#2D4E3D'); // background color set to chalkboard color
  textFont('Chalkduster'); // Font of the texts set to Chalkduster
}

function draw() {
  menu(); // Calls the menu function below
  for (i = 0; i < user_count; i++) { // a for loop that moves from 0 till the value of the variable user_count
    fill('red'); // sets the filling color to red
    ellipse(i * 50 + 100, 100, 30, 30); // draws ellipse(s) based on the value of the user_count
  }
  for (i = 0; i < thanos_count; i++) { // a for loop that moves from 0 till the value of the variable thanos_count
    fill('red'); // sets the filling color to red
    ellipse(i * 50 + 820, 100, 30, 30); // draws ellipse(s) based on the value of the user_count
  }
  setInterval(function() { // sets the time for the win / lost image appearance
    if (user_count == playCount) { // if user_count value equals to the value of playCount
      winSize = random(5, 400); // sets the size of the "win" sign on a random basis, between 5 and 500
      image(Win, random(-100, 1200), random(-100, 300), winSize, winSize * (106 / 190)); // draws the "win" sign on a random basis on the canvas
    }
    if (thanos_count == playCount) { // if thanos_count value equals to the value of playCount
      lostSize = random(5, 400); // sets the size of the "lost" sign on a random basis, between 5 and 500
      image(Lose, random(-100, 1200), random(-100, 300), lostSize, lostSize * (119 / 190)); // draws the "lost" sign on a random basis on the canvas
    }
  }, 3000); // delays the win / lost image appearance by 3 seconds
}

// menu function that creates the player names, rock paper scissors, "Reset" button, and "How to Play" button.
function menu() {
  noStroke();
  fill(255);
  textSize(30);
  text("Player 1: " + userName, 100, 50); // player 1 name
  text("Player 2: Thanos", 790, 50); // player 2 name
  if (overResetButton()) {
    fill('black');
  } else {
    fill('gray'); // allows the color change when mouse is hovered
  }
  rect(1050, 520, 100, 50);
  fill(255);
  textSize(16);
  text("RESET", 1050 + 25, 520 + 30);
  if (overTutorialButton()) {
    fill('black');
  } else {
    fill('gray'); // allows the color change when mouse is hovered
  }
  rect(840, 520, 150, 50);
  image(Rock, 150, 410, 119, 236);
  image(Paper, 300, 410, 119, 236);
  image(Scissors, 450, 410, 119, 236);
  textSize(14);
  fill(255);
  text("Rock", 150 + 35, 520 + 40);
  text("Scissor", 450 + 30, 520 + 40);
  fill(0);
  text("Paper", 300 + 35, 520 + 40);
  fill(255);
  text("HOW TO PLAY", 840 + 20, 520 + 30);
  text("Choose your", 50, 500);
  text("move!", 50, 525);
}

// function that is called when "reset" button is pressed
function reset() {
  user_count = 0;
  _count = 0;
  background('#2D4E3D');
}

// function that determines where mouseX and mouseY should be to press on Reset button
function overResetButton() {
  return mouseX > 1050 && mouseX < 1050 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

// function that determines where mouseX and mouseY should be to press on How to Play button
function overTutorialButton() {
  return mouseX > 840 && mouseX < 840 + 150 && mouseY > 520 && mouseY < 520 + 50;
}

// function that determines where mouseX and mouseY should be to press on Rock
function overRock() {
  return mouseX > 150 && mouseX < 150 + 100 && mouseY > 440 && mouseY < 600;
}

// function that determines where mouseX and mouseY should be to press on Paper
function overPaper() {
  return mouseX > 300 && mouseX < 300 + 100 && mouseY > 410 && mouseY < 600;
}

// function that determines where mouseX and mouseY should be to press on Scissors
function overScissors() {
  return mouseX > 450 && mouseX < 450 + 100 && mouseY > 440 && mouseY < 600;
}

// function that is executed when mouse button is pressed.
// includes executing thanos's move and comparing the user's move with each other to determine the winner & loser
// also includes resetting the game & viewing the Tutorial
function mousePressed() {
  background(0);

  // resets the game
  if (overResetButton()) {
    reset();
  }

  // Shows the "how to play" text
  if (overTutorialButton()) {
    fill(0);
    rect(300, 100, 600, 300);
    fill('gray');
    rect(500, 350, 200, 50);
    fill(255);
    textSize(16);
    text("Welcome to Rock Paper Scissors!", 320, 150);
    text("Press Rock, Paper, or Scissor to make your move.", 320, 200);
    text("You must stop thanos before he wipes out half the universe", 320, 225);
    text("Good luck!", 320, 250);
    text("<EXIT TO GAME>", 525, 380);
  }

  // lists all 9 possibilities that can happen (3 moves from user * 3 moves from thanos)
  // determines the winner & loser for each
  fill(255);
  mix();
  textSize(20);
  if (overRock()) {
    if (thanosChoice === "Scissors") {
      text("Your move: rock", 400, 75);
      text("thanos's move: " + thanosChoice, 400, 100);
      text("User wins this round!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Rock, 25, 175);
      image(Scissors, 675, 175);

      if (user_count == playCount - 1) {
        user_count++;
        textSize(50);
        fill('yellow');
        text("YOU WIN!", 540, 540);
      } else {
        user_count++;
      }
    } else if (thanosChoice === "paper") {
      text("Your move: rock", 400, 75);
      text("Thanos's move: " + thanosChoice, 400, 100);
      text("Thanos wins this round!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Rock, 25, 175);
      image(Paper, 675, 175);

      if (thanos_count == playCount - 1) {
        thanos_count++;
        textSize(50);
        fill('yellow');
        text("SORRY, YOU LOSE :(", 540, 510);
      } else {
        thanos_count++;
      }
    } else {
      text("Your move: rock", 400, 75);
      text("Thanos's move: " + thanosChoice, 400, 100);
      text("It's a tie!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image( Rock, 25, 175);
      image( Rock, 675, 175);
    }
  } else if (overPaper()) {
    if (thanosChoice === "rock") {
      text("Your move: paper", 400, 75);
      text("thanos's move: " + thanosChoice, 400, 100);
      text("User wins this round!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Paper, 25, 175);
      image(Rock, 675, 175);

      if (user_count == playCount - 1) {
        user_count++;
        textSize(50);
        fill('yellow');
        text("YOU WIN!", 540, 540);

      } else {
        user_count++;
      }
    } else if (thanosChoice === "scissors") {
      text("Your move: paper", 400, 75);
      text("thanos's move: " + thanosChoice, 400, 100);
      text("thanos wins this round!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Paper, 25, 175);
      image(Scissors, 675, 175);

      if (thanos_count == playCount - 1) {
        thanos_count++;
        textSize(50);
        fill('yellow');
        text("SORRY, YOU LOSE :(", 540, 510);
      } else {
        thanos_count++;
      }
    } else {
      text("Your move: paper", 400, 75);
      text("thanos's move: " + thanosChoice, 400, 100);
      text("It's a tie!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Paper, 25, 175);
      image(Paper, 675, 175);
    }
  } else if (overScissors()) {
    if (thanosChoice === "paper") {
      text("Your move: scissors", 400, 75);
      text("thanos's move: " + thanosChoice, 400, 100);
      text("User wins this round!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Scissors, 25, 175);
      image(Paper, 675, 175);

      if (user_count == playCount - 1) {
        user_count++;
        textSize(50);
        fill('yellow');
        text("YOU WIN!", 540, 540);
      } else {
        user_count++;
      }
    } else if (thanosChoice === "rock") {
      text("Your move: scissors", 400, 75);
      text("thanos's move: " + thanosChoice, 400, 100);
      text("thanos wins this round!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Scissors, 25, 175);
      image(Rock, 675, 175);

      if (thanos_count == playCount - 1) {
        thanos_count++;
        textSize(50);
        fill('yellow');
        text("SORRY, YOU LOSE :(", 540, 510);
      } else {
        thanos_count++;
      }
    } else {
      text("Your move: scissors", 400, 75);
      text("thanos's move: " + thanosChoice, 400, 100);
      text("It's a tie!", 400, 150);
      text("Choose a move to continue playing", 400, 175);
      image(Scissors, 25, 175);
      image(Scissors, 675, 175);
    }
  }
}
