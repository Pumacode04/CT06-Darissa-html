// write your codes here
let soundsFX;
let ypos;

function preload () {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3")

}
function setup() {
    createCanvas(600, 400);
    background(0);
    sounds.FX();
    fill("cyan");
    textSize(48);
    ypos = height;
}

function draw() {
    background(0);
    translate( width/2, ypos );
    textAlign(center, center);
    text("the beginning of the star wars story...", 0, 0);
    text("AT EPISODE 4 IN THE YEAR 1995", 0, 50);
    ypos = ypos - 1;
    if (keyIsDown(32) ) {
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}