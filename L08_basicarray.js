// write your codes here
xpos = 300;
ypos = 350;
function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
noStroke();
fill( random(255), random(255), random(255));
rect(xpos, ypos, 50);
}