// write your codes here
let soundEffect, bgMusic, staticImage;
let xpos = 200;
let ypos = 265;

function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');

    staticImage = loadImage('assets/pico-a.png');
    secondguy = loadImage('assets/cute.Penguin.svg');
}
function setup() {
    createCanvas(400, 400);
    background("skyblue");
    bgMusic.loop();
}

function draw() {
background("skyblue");
image(staticImage, xpos, ypos, 110, 133);
if(keyIsDown( RIGHT_ARROW )) {
    xpos = xpos + 1;
}
else if (keyIsDown( LEFT_ARROW )) {
    xpos = xpos - 1;
}
else if (keyIsDown (32)){
    soundEffect.play();
}
xpos = constrain(xpos, 0, 290, 110);
//background(200)
//noFill();
//rect(50, 50, 300, 300);
//fill(110, 0, 210);
//rect(xpos, ypos, 50, 50);
//if(keyIsDown( RIGHT_ARROW )) {
//    xpos = xpos + 1;
//}
//if (keyIsDown( LEFT_ARROW )) {
//    xpos = xpos - 1;
//}
//if (keyIsDown( DOWN_ARROW )) {
//    ypos = ypos + 1;
//}
//if (keyIsDown( UP_ARROW )) {
//    ypos = ypos - 1;
//}
//xpos = constrain(xpos, 50, 300);
//ypos = constrain(ypos, 50, 300);
}