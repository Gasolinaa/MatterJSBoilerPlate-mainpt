
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var block1, block2, block3
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_options={
isStatic: true
}
plane = Bodies.rectangle(600,580,1200,2,plane_options)
World.add(world, plane)
var block1_options={
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}
var block2_options={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}
var block3_options={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}
block1 = Bodies.circle(220,10,10,block1_options)
World.add(world, block1)
block2 = Bodies.rectangle(110,50,10,10,block2_options)
World.add(world, block2)
block3 = Bodies.rectangle(350,50,10,10,block3_options)
World.add(world, block3)

  fill("pink");
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("white");
  Engine.update(engine);
rect(plane.position.x,plane.position.y,1200)
ellipse(block1.position.x,block1.position.y,30);
rect(block2.position.x,block2.position.y,60)
rect(block3.position.x,block3.position.y,10)
}



