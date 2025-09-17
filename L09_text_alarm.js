// write your codes here
// let speed;
// let xpos;
// function setup() {
//     createCanvas(600, 400);
//     background(200);
//     speed = 1.87;
//     xpos = width/2;
// }

// function draw() {
//     background(220);
//     textSize(28);
//     translate( xpos, height/2);
//     textAlign(CENTER, CENTER);
//     text("Bounce!", 0, 0);
//     xpos = xpos + speed;
//     if ( xpos < 0 || xpos > 600 ) {
//         speed = speed * -1;
//      }
// }

function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    background(200);
    let hourNumber = hour();
    hourNumber = nf(hourNumber, 2);
    let minuteNumber = minute();
    minuteNumber = nf(minuteNumber, 2);
    let secondNumber = second();
    secondNumber = nf(secondNumber);

   // let timeNow = [hourNumber, minuteNumber, secondNumber];
   let timeNow = hourNumber + ":" + minuteNumber + ":" + 

    textAlign(CENTER, CENTER);
    textSize(48);
    text( timeNow, width/2, height/2);
}