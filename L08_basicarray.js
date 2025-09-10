// write your codes here
let xpos = 200;
let ypos = 250;
function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
    noStroke();
    fill( random(255), random(255), random(255));
    rect(xpos, ypos, 50);
    if ( xpos > 350) {
       xpos = xpos + 1;
    }

}