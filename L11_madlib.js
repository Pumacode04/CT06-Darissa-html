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
let adjective = "et cetera : Pink";

let inputAdverb;
let adverb = "et cetera : softly";

let inputPlace;
let place = "et cetera : computer lab";

let templates;

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

    inputAdjective = createInput(adjective, "text");
    inputAdjective.position(350, 150);

    inputAdverb = createInput(adverb, "text");
    inputAdverb.position(350, 200);

    inputPlace = createInput(place, "text");
    inputPlace.position(350, 250);

    button1 = createButton("Your kool sentence! :D");
    button1.position(50, 300);
    button1.size(100, 50);
    button1.mousePressed(updateStory);

    templates = [
        "The {adv} {noun} is {verb}{adverb} at the {place}",
        "One day, a {adj} {noun} goes to the {place}",
        "Did you hear 'bout the {adj} {noun} that tried to {verb} {adverb} near {place}",
    ];

    let selection = random(templates);
    console.log("selection: " + selection); //+ string concatenation
    story = selection.replace("{adjective}", tall);
    story = story.replace(  "{noun}",   "man");
    story = story.replace(  "{verb}",   "trudge");
    story = story.replace(  "{noun}",   "man");
    story = story.replace(  "{verb}",   "trudge");


}

function updateStory() {
//    background(224, 226, 255);
//    noun = inputNoun.value();
//
//    textAlign(RIGHT, CENTER);
//    textSize(28);
//    text(noun, width/2, height/2);
    console.log(inputNoun.value());
    console.log(inputVerb.value());
    console.log(inputAdjective.value());
    console.log(inputAdverb.value());
    console.log(inputPlace.value());
}

function draw() {
    background(224, 226, 255);

    textSize(24);
    textAlign(LEFT, CENTER);
    text("Noun :", width/2-250, height/2-237);

    textAlign(LEFT, CENTER);
    text("Verb :", width/2-250, height/2-187);

    textAlign(LEFT, CENTER);
    text("Adjective :", width/2-250, height/2-137);

    textAlign(LEFT, CENTER);
    text("Adverb :", width/2-250, height/2-87);

    textAlign(LEFT, CENTER);
    text("Place :", width/2-250, height/2-37);
}