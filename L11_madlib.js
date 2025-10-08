// write your codes here
// let inputSomeText;
// let button1;
// let story = "Cat : Meow:3";

// function setup() {
//     createCanvas(600, 400);
//     background(224, 226, 255);

//     inputSomeText = createInput(story, "text");
//     inputSomeText.position(50, 50);
// //    inputSomeText.size(500, 100);

//     button1 = createButton("Click on me lah");
//     button1.position(50, 100);
//     button1.size(100, 50);
//     button1.mousePressed(updateStory); //connect

// }

// function updateStory() {
//     background(224, 226, 255);
//     story = inputSomeText.value();

//     textAlign(CENTER, CENTER);
//     textSize(28);
//     text(story, width/2, height/2);
// }

// function draw() {

// }
let button1;
let inputNoun;
let noun = "et cetera : Flamingo";


function setup() {
    createCanvas(600, 600);
    background(224, 226, 255);

    inputNoun = createInput(noun, "text");
    inputNoun.position(50, 50);
    
    
    button1 = createButton("Your kool sentence! :D");
    button1.position(50, 100);
    button1.size(100, 50);
    button1.mousePressed(updateStory);
}

function updateStory() {
    background(224, 226, 255);
    noun = inputNoun.value();

    textSize(28);
    text(noun, width/2, height/2);
}

function draw() {

}