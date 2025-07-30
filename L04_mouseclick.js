//print("Welcome to lesson 4!")

let shapeColor = "blue";


function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    fill(shapeColor)
    circle(100, 100, 100);
}

function mouseReleased() {
    shapeColor = "blue";
}