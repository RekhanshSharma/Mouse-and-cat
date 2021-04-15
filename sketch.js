var garden;
var cat1, cat2, cat3;
var mouse1, mouse2, mouse3;
var gameState = "start";

function preload(){
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png", "cat3.png");
    cat3 = loadAnimation("cat4.png");

    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png","mouse3.png");
    mouse3 = loadAnimation("mouse4.png");

    garden = loadImage("garden.png");
}

function setup(){
    createCanvas(800, 800);

    cat = createSprite(700, 700, 10, 10);
    cat.addAnimation("catSitting",cat1);
    cat.scale = 0.17;

    mouse = createSprite(100, 700, 10, 10);
    mouse.addAnimation("mouseExpressions",mouse1);

    mouse.scale = 0.15;

    cat.debug = true;
    mouse.debug = true;
    cat.setCollider("rectangle", 0, 0 , 100, 100);

}

function draw(){
    background(garden);

    if(cat.x-mouse.x < cat.width/4+mouse.width/4){
        cat.addAnimation("cat3", cat3);
        cat.changeAnimation("cat3");

        mouse.addAnimation("mouse3",mouse3);
        mouse.changeAnimation("mouse3");

        cat.velocityX = 0;
    }
    

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catWalking", cat2);
        cat.changeAnimation("catWalking");

        mouse.addAnimation("mouse2",mouse2);
        mouse.changeAnimation("mouse2");
    }
}

