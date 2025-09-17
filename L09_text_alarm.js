// write your codes here
let speed;
let xpos;
function setup() {
    createCanvas(600, 400);
    background(200);
    speed = 1.87;
    xpos = width/2;
}

function draw() {
    background(220);
    textSize(28);
    translate( xpos, height/2);
    textAlign(CENTER, CENTER);
    text("Bounce!", 0, 0);
    xpos = xpos + speed;
    if ( xpos < 0  ) {
        speed = speed * -1;
     }
    if ( xpos > 600 ) {
        speed = speed * -1
    }
}