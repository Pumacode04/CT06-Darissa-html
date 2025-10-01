// write your codes here
let bgColor = "";
let colorPicker;
let username = "Princess Cherry";
let userInput;

function setup() {
    createCanvas(600, 600);
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position( width/2-25, height/2);

    userInput= createInput()
    userInput.position( width/2-25, height/2+100);
    userInput.input(updateLabel);
}

function updateLabel() {
    username = userInput.value();
}

function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 100, 400, 200, 25);
    fill("Black")
    textSize(32);
    textAlign(CENTER, CENTER);
    text(username, width/2, 150);
}