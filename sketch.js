
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Con = Matter.Constraint;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(350,100,300,30)
  
     
	bob1 = new bob(250,300,20,20)
  bob2 = new bob(300,300,20,20) 
  bob3 = new bob(350,300,20,20)
	bob4 = new bob(400,300,20,20)
	bob5 = new bob(450,300,20,20)
 
  rope1 = new rope(bob1.body,roof1.body,-100,0)
	

  rope2 = new rope(bob2.body,roof1.body,-50,0)
	

  rope3 = new rope(bob3.body,roof1.body,0,0)
	

  rope4 = new rope(bob4.body,roof1.body,50,0)
	

  rope5 = new rope(bob5.body,roof1.body,100,0)

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  roof1.display();



  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
  drawSprites();
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}


