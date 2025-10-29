// write your codes here
function setup() {
    createCanvas(1000, 700);
    background(0);
}

function draw() {
    fill("red");
    rect(0, 675, 1000, 25); //floor

    //player
    fill("pink");
    rect(width/2, height/2, 50, 50);
}

function drawSpike(x1, x2, y1, y2) {
    fill("lightblue");
    triangle(0, 675, 50, 775, 100, 675);
}