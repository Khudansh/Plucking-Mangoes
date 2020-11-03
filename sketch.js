var boy,boyImg;
var tree,treeImg;
var stoneImg,stone;
var mangoImg,mango1,mango2,mango3,mango4,mango5;
var slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	boyImg=loadImage("boy.png");
	stoneImg=loadImage("stone.png");
	treeImg=loadImage("tree.png");
	mangoImg=loadImage("mango.png");
	
	
}

function setup() {
	createCanvas(1600, 700);

	boy=createSprite(300,600);
	boy.addImage("boyImg",boyImg);
	boy.scale=0.1;


	engine = Engine.create();
	world = engine.world;

	stone= new Stone(250,550,50,40);
	tree= new Tree(1300,470,500,500);
	
	mango1= new Mango(1300,400,50,50);
	mango2= new Mango(1250,300,50,50);
	mango3= new Mango(1200,400,50,50);
	mango4= new Mango(1400,375,50,50);
	mango5= new Mango(1350,300,50,50);
	slingshot= new Slingshot(stone.body,{x:200,y:550});


	Engine.run(engine);
  
}


function draw() {
  background("yellow");
  
  
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display();
  drawSprites();
}

//function mouseDragged(){
    //if(slingshot.sling.bodyA!=null){
        //Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    //}
    
//}

//function mouseReleased(){
    //slingshot.fly();
    //Matter.Body.applyforce(stone.body,{x:stone.body.position.x,y:stone.body.position.y},{x:20,y:-20})
//}



