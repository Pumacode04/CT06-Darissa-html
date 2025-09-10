// write your codes here
let xpos = 200;
let ypos = 250;
function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
    noStroke();
    rect(xpos, ypos, 50);
    if ( xpos > 350) {
       xpos = xpos + 1;
    }

}