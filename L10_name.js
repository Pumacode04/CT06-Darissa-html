// write your codes here
let bgColor = "darkred";
let colorPicker;

function setup() {
    createCanvas(600, 600);
    background(bgColor);

    colorPicker = createColorPicker();
    colorPicker.position( width/2-25, height/2);
}

function draw() {
    
    fill("white")
    rect(100, 100, 400, 200, 25);
}