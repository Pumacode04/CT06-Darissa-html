function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
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
for(i=0; i<5; i++) {
  fill(i*50);
    circle(50 + i*50, 200, 40);
}
  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}