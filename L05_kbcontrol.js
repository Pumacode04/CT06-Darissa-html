// write your codes here
//#let shapeColor = ""
//#let size = 5;
let rectSize = 50
function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
//#    noStroke();
    rectSize(300, 200, rectSize, rectSize);
}

function mousePressed() {
//#    shapeColor = color( random(255), random(255), random(255));
//#    fill(shapeColor)
//#    size = 5
}

function mouseDragged() {
//#    circle(mouseX, mouseY, size);
//#    size = size + 0.5;
}

function keyPressed() {
    rectSize = 100;
}

function keyReleased() {
    rectSize = 50;
}