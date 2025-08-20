// write your codes here
let soundEffect, bgMusic, staticImage

function preload() {
    soundEffect = loadSound('assests/pop.mp3')
    bgMusic = loadSound('assests/bossaNova.mp3')

    staticImage = loadImage('assests/pico-a.png')
}
function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
noFill();
rect(50, 50, 300, 300);
rect()
if(keyIsDown( RIGHT_ARROW )) {
    xpos = xpos + 1
}

}