// write your codes here
function setup() {
    createCanvas(1000, 700);
    background(0);
}

function draw() {
    fill(0, 125, 255); //blue
    rect(0, 675, 1000, 25); //floor

    //player
    fill("limegreen");
    rect(width/2, height/2, 50, 50);
    fill(255, 0, 0);
    drawSpike();
}

function drawSpike() {
    fill("blue");
    triangle(825, 700, 875, 575, 925, 650);
}