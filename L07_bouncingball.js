// write your codes here
function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
fill(0)
stroke(255, 0, 0);
strokeWeight(10);
circle(150, height/2, 75);
triangle(250, 250, 300, 175, 350, 250);
rect(350, height/2, 50, 50);
}