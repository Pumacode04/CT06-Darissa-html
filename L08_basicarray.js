// write your codes here
// let xpos = 150;
// let ypos = 250;
// let speed = 2;
function setup() {
    createCanvas(400, 400);
    background(0);

    let ypos = 80;
    fill("cyan");
    textSize(20);
    textAlign(LEFT, TOP);
//    text("My name is", 50, 50);
//    text("I am", 50, 100);
//    text("My favourite activity is", 50, 150);
//    text("Good Luck guessing :)", 50, 200);

    let favFood = ["Ice Cream", "Speghetti", "Chocolate", "Cookies"];
    console.log( favFood.length);
    for ( let index=0; index < favFood.length; index++) {
//        console.log( "I like to eat " + favFood + ".");
//        text( "I like to eat " + favFood[index] + ".", 80, ypos)
//        ypos = ypos + 50
        text("My Favourtie foods :", 50, 50);
        text(i+1)
    }
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