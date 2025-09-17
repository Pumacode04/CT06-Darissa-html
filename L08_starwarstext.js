// write your codes here
let soundsFX;
let ypos;

function preload () {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3")

}
function setup() {
    createCanvas(600, 400);
    background(0);
    soundsFX.loop();
    fill("cyan");
    textSize(28);
    ypos = height;
}

function draw() {
    let textY = 0;
    background(0);
    translate( width/2, ypos );
    textAlign(CENTER, CENTER);
    text("the beginning of the star wars story...", 0, 0);
    text("AT EPISODE 4 IN THE YEAR 1995", 0, 50);

    let story = [
        "the beginning of the star wars story",
        "AT EPISODE 4 IN THE YEAR 1995",
        "knock knock",
        "the little pig opened the door",
        "the wolf huffed",
        "and puffed",
        "BOOM",
        "the house blew up",
        "the little pig was as dead as a doorknob",
        "the wolf ate him",
        "THE END"
    ]

    for (let index=0; index< story.length; index ++); {
        text( story[index], 0, textY);
        textY = textY + 35;
    }

    if ( ypos < 0 ) {
        ypos = height;
    }

    ypos = ypos - 0.6;
    if (keyIsDown(32) ) {
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}