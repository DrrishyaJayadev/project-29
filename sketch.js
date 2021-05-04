const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,b0x11,box12,box13,box14,box15,box16,box17,box18
var ground1,ground2,ground3
var slinghot

var gameState = "onSling";


function preload() {
      
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(390,300,200,30);
    polygon=new Polygon(100,200,30,30);
    ground2=new Ground(600,390,1200,10)
    ground3=new Ground(815,240,200,30)
sling=new SlingShot(polygon.body,{x:100,y:200})

//level two
box1=new Box(330,235,30,40);
box2=new Box(360,235,30,40);
box3=new Box(390,235,30,40);
box4=new Box(420,235,30,40);
box5=new Box(450,235,30,40);

//level three  
box6=new Box(360,195,30,40);
box7=new Box(390,195,30,40);
box8=new Box(420,195,30,40);

//top
box9=new Box(390,155,30,40);

//level two
box10=new Box(800,230,30,40);
box11=new Box(810,230,30,40);
box12=new Box(820,230,30,40);
box13=new Box(821,230,30,40);
box14=new Box(822,230,30,40);

//level three
box15=new Box(810,200,30,40);
box16=new Box(820,200,30,40);
box17=new Box(821,200,30,40);

//top
box18=new Box(820,180,30,40);
}
function draw(){
    background("brown");
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
    ground1.display();
    polygon.display();
    sling.display();
    ground2.display();
    ground3.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
sling.fly();
}
