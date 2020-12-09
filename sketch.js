const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage, treeImage, ground, stone, rope;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload() {
  boyImage = loadImage("sprites/boy.png");
  treeImage = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,1200,30);
	stone = new Stone(100,300,50,50);
	mango1 = new Mango(600, 35, 30,30);
	mango2 = new Mango(650, 20, 30,30);
	mango3 = new Mango(550, 105, 30,30);
	mango4 = new Mango(595, 105, 50,30);
	mango5 = new Mango(640, 80, 40,30);
	mango6 = new Mango(640, 140, 50,30);
	mango7 = new Mango(690, 70, 40,30);
	mango8 = new Mango(690, 120, 40,30);
	mango9 = new Mango(730, 110, 40,30);
	mango10 = new Mango(570, 150, 40,30);
	rope = new Rope(stone.body, {x: 100, y: 250});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  

  ground.display();
  image(treeImage, 500, -5, 250, 375);
  image(boyImage, 80, 215, 100, 200);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  rope.display();
  stone.display();


  

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  detectollision(stone, mango8);
  detectollision(stone, mango9);
  detectollision(stone, mango10);

  textFont("Georgia");
  fill("white");
  textSize(20);
  text("Press the space key to get another chance!", 200, 380);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX ,y: mouseY});
}

function mouseReleased() {
    rope.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 100, y: 250});
		rope.attach(stone.body);
	}
}

// function detectollision(lstone,lmango){
//   mangoBodyPosition=lmango.body.position
//   stoneBodyPosition=lstone.body.position
  
//   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
//   if (distance<=lmango.r+lstone.r){
//   Matter.Body.setStatic(lmango.body,false)
//   }
//   }

function detectollision(stone, mango) {
    mangoPos = mango.body.position;
    stonePos = stone.body.position;

    if (stonePos.x - mangoPos.x < stone.width+ mango.width &&
      mangoPos.x - stonePos.x < mango.width + stone.width &&
      stonePos.y - mangoPos.y < mango.height + stone.height &&
      mangoPos.y - stonePos.y < mango.height + stone.height){
          console.log("hello")  ;
            Matter.Body.setStatic(mango.body,false);
    }
}