// write your codes here
let xpos = 150;
let ypos = 250;
let speed = 2;
function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
    noStroke();
    background(200);
    rect(xpos, ypos, 50, 50);
    xpos = xpos + speed
    if ( xpos > 350 || xpos < 0) {
        fill( random(255), random(255), random(255));
        speed = speed * -1;
    }
}