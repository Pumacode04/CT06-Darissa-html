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

let inputVerb;
let verb = "et cetera : Fell";

let inputAdjective;
let adjective = 
let inputAdverb;

let inputPlace;

function setup() {
    createCanvas(600, 600);
    background(224, 226, 255);
    
//    textSize(24);
//    textAlign(LEFT, CENTER);
//    text("Noun :", width/2-250, height/2-237);

    inputNoun = createInput(noun, "text");
    inputNoun.position(350, 50);
    
//    textAlign(LEFT, CENTER);
//    text("Verb :", width/2-250, height/2-187);

    inputVerb = createInput(verb, "text");
    inputVerb.position(350, 100);

    input

    button1 = createButton("Your kool sentence! :D");
    button1.position(50, 150);
    button1.size(100, 50);
    button1.mousePressed(updateStory);
}

function updateStory() {
//    background(224, 226, 255);
//    noun = inputNoun.value();
//
//    textAlign(RIGHT, CENTER);
//    textSize(28);
//    text(noun, width/2, height/2);
    console.log(inputNoun.value());
    console.log(inputVerb.value())
}

function draw() {
    background(224, 226, 255);

    textSize(24);
    textAlign(LEFT, CENTER);
    text("Noun :", width/2-250, height/2-237);

    textAlign(LEFT, CENTER);
    text("Verb :", width/2-250, height/2-187);

}