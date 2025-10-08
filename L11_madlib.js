// write your codes here
let inputSomeText;
let button1;
let story;

function setup() {
    createCanvas(600, 400);
    background(200);

    inputSomeText = createInput(story, "text");
    inputSomeText.position(50, 50);
//    inputSomeText.size(500, 100);

    button1 = createButton("Click on me lah");
    button1.position(50, 100);
    button1.size(100, 50);
    button1.mousePressed(updateStory); //connect

}

function updateStory() {
    story = inputSomeText.value();

    textAlign(CENTER, CENTER);
}

function draw() {

}