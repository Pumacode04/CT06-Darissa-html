// write your codes here
let soundsFX;
let ypos;

function preload () {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3")
    soundsFX.loop();
}
function setup() {
    createCanvas(600, 400);
    background(0);
    fill("cyan");
    textSize(18);
    ypos = height;
}

function draw() {
    translate
    text("the beginning of the star wars story...", 0, 0)
    if (keyIsDown(32) ) {
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}