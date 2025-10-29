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
    drawSpike(850, )
}

function drawSpike(x1, x2, y1, y2) {
    fill("blue");
    triangle(x1, y1, x2-x1/2, y2, x2, y1);
}