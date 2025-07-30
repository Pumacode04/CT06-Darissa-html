let spacing = 50;
let colourValue = 0;

function setup() {
    createCanvas(200, 200);
    background(220);
    //noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
//circle(75, 200, 100);
//circle(225, 200, 100);
//circle(375, 200, 100);
//circle(525, 200, 100);
//for(i=0; i<4; i++) {
//    circle(50 + i*50, 200, 40);
//}
  // Task 1: Colour Gradient
//for(i=0; i<5; i++) {
//  fill(i*spacing);
//    circle(spacing + i*spacing, 200, 40);
//}
//let x = 50;
//let greenValue = 0;
//for(let i=1; i<6; i++){
//  fill(0, greenValue, 0);
//  x = x + (x * i);
//  circle(x, x, 50);
//  greenValue = greenValue + 51;
//}
//Reminder : complete above :)
  // Task 2: Colour Loop
//for(i=0; i<5; i++) {
//    fill(colourValue%255);
//    circle(spacing + i*spacing, 200, 40);
//    colourValue +=1;
//}
  // Task 3: Row of Circles
rect(0, 50, 200, 100);

  // Task 4: Grid of Circles
//let x = 50;
//for(let i=0; i<5; i++){
//    fill(0);
//    if(i%2 === 0) fill(255);
//    rect(x, 50, 50, 50);
//    x = x + 60
}