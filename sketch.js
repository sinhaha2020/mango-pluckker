var boy,boyimg;
var mango,mangoimg;
var stone,stoneimg;
var tree,treeimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png");
	mangoimg = loadImage("Plucking mangoes/mango.png");
	stoneimg = loadImage("Plucking mangoes/stone.png");
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(200,380,50,50);
	
	ground = new Ground(200,400,400,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();


  
  drawSprites();
 
}



