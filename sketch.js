
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,380,800,50);
	paper1 = new Paper(100,360,30);
	bin1 = new Dustbins(600,350);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  
  background("skyblue");

 ground.display();
 paper1.display();
 bin1.display();
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 55, y : -55});
	}


}

