const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var zombieImg, playerImg, bgImg, zombie, player;

function preload() {
zombieImg = loadImage("zombie.png");
playerImg = loadImage("player.png");
bgImg = loadImage("background.jpg");
}

function setup() {
  createCanvas(1400,700);

  var noGrav = {
    isStatic: true
  }

  player = Bodies.rectangle(100, 100, 1, 1, noGrav);
  zombie = Bodies.rectangle(700, 700, 1, 1, noGrav);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() {
  image(zombieImg, zombie.position.x, zombie.position.y);
  image(playerImg, player.position.x, player.position.y);

  background(51);
  Engine.update(engine);
  
}

