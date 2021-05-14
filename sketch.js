var groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paperObject,da;

function preload(){
	
}

function setup() {
	createCanvas(1350, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite = new Ground(width/2,height-15,width,20);
	dus1 = new Dustbin(1200,height-35,160,20);
	dus2 = new Dustbin(1280,height-135,20,200);
    dus3 = new Dustbin(1120,height-135,20,200);

	paperObject = new Paper (200,height-30,45);

	Slingshot = new SlingShot(paperObject.body,{x:200, y:100});

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  paperObject.display();
  groundSprite.display();
   dus3.display();
   dus2.display();
   dus1.display();
   Slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}