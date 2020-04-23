const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2, box3,box4,box5,box6;
var box7,box8,box9,box10

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,345,50,50);
    box2 = new Box(200,345,50,50);
    box3 = new Box(250,345,50,50);
    box4 = new Box(175,300,40,40);
    box5 = new Box(225,300,40,40);
    box6 = new Box(200,265,30,30);

    box7= new Box(100,345,50,50);
    box8= new Box(300,345,50,50);

    box9= new Box(125,300,40,40);
    box10= new Box(275,300,40,40);

    box11 = new Box(150,265,30,30);
    box12 = new Box(250,265,30,30);
    box13 = new Box(200,240,110,20);
    box14 = new Box(200,210,40,40);
    


    ground =new Ground(200,380,400,20);
}

function draw(){
    background("blue");
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
    

    ground.display();
 
}