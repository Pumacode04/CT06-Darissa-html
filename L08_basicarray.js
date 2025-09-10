// write your codes here
// let xpos = 150;
// let ypos = 250;
// let speed = 2;
function setup() {
    createCanvas(400, 400);
    background(0);

    fill("cyan");
    textSize(20);
    text("My name is", 50, 50);
    text("I am", 50, 100);
    text("My favourite activity is", 50, 150);
}

function draw() {

}

// function draw() {
//     background(220);
//     noStroke();
//     rect( xpos, ypos, 50, 50 );

//     xpos = xpos + speed;

//     if ( xpos < 0 || xpos > width-50 ) {
//         fill( random(255), random(255), random(255) );
//         speed = speed * -1;
//     }
// }