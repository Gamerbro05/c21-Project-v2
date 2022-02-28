var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Matter.Bodies.circle(80, 80, 20, ball_options)
	World.add(world, ball)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse()
  drawSprites();
 
}



