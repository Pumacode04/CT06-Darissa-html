// write your codes here
let xpos = 150;
let ypos = 250;
function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
    noStroke();
    background(200);
    rect(xpos, ypos, 50, 50);
    if ( xpos < 350) {
       xpos = xpos + 1;
    }
    if ( xpos = 350 || 0) {
        fill( random(255), random(255), random(255));
    }
    if (xpos < 0) {
        xpos = xpos - 1
    }

}