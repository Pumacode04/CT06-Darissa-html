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
    rect(100, 625, 50, 50); //rect(100, height, 50, 50)
    fill(255, 0, 0);

    drawSpike(); //spike triangle
}

function drawSpike() {
//    fill("red");
//    triangle(825, 675, 850, 600, 875, 675); 
    // above : triangle(change,675,change,600,change,675)

    fill("red");
    triangle(x1, y1, x3, )
}