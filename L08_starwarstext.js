// write your codes here
function preload () {
    let soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3")
    soundsFX.loop();
}
function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    if (keyIsDown(32) ) {
        soundsFX.play();
    }
    
}