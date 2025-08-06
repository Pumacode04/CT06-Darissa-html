// write your codes here
function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    noStroke();
}

function mousePressed() {
    shapeColor = color( random(255), random(255), random(255));
}
let size = 5;
function mouseDragged() {
    circle(mouseX, mouseY, size);
    size = size + 0.5;
}