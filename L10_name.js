// write your codes here
let bgColor = "lavender";
let colorPicker;
let username = "Write something";
let userInput;
let ageInput;

function setup() {
    createCanvas(600, 600);
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position( width/2+10, height/2+50);

    userInput = createInput()
    userInput.position( width/2-180, height/2+100);
    userInput.input(updateLabel);

    ageInput = creatInput();
    ageInput.position( width/2-260)
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

    textAlign(RIGHT, CENTER);
    textSize(18);
    text("Name:", width/2-200, height/2+110);

    textAlign(RIGHT, CENTER);
    text("Choose Background color:", width/2-10, height/2+60);
}