var gif_loadImg, gif_createImg;
function preload(){

  gif_loadImg = loadImage("source.gif");
  gif_createImg = createImg("source.gif");
}
function setup() {
  createCanvas(1000,1000);
}

function draw() {
  // put drawing code here
  image(gif_loadImg,100,100)
  gif_createImg.position(100, 400)
}
