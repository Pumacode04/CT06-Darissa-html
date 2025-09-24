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
    secondNumber = nf(secondNumber, 2);

   // let timeNow = [hourNumber, minuteNumber, secondNumber];
   textSize(48);
   fill(0);
   let timeNow = hourNumber + ":" + minuteNumber + ":" + secondNumber

    textAlign(CENTER, CENTER);
    text( timeNow, width/2, height/2);

    let counter = 5;
    counter = nf(counter, 2, 1);

    text("Counterdown Timer", width/2, height/2+ 50);
    text(counter, width/2, height/2+ 100);
    text("Click me to start the time")


//    let pi = 3.14159267189
//    pi = nf(pi, 2, 4); // 4 decimal place
//    fill(255, 0, 0);
//    text("pi is " + pi, width/2, height/2+ 50);
}