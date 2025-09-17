// write your codes here
let speed = 1.87
let xpos = 300
let ypos = 200
let counter = 1
function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    textSize(28);
    textAlign(CENTER, CENTER);
    background(200);
    text("Bounce!", xpos - speed * counter, 200);
    counter = counter + 1;
    if ( xpos < 0 ) {
        speed = speed * -1;
    }
    if ( xpos > 600 ) {
        speed = speed * 1;
    }
}