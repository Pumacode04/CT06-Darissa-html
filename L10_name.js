// write your codes here
let bgColor = "darkred";
let colorPicker;

function setup() {
    createCanvas(600, 400);
    background(bgColor);

    colorPicker = createColorPicker();
    colorPicker.posit( width/2-25, height/2);
}

function draw() {
    fill("white")
    rect(100, 100, 400, 200, 25);
}