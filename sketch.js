const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var snowObj;
function preload(){

backgroundImage = loadImage("snow3.jpg");



}

function setup() {
  createCanvas(1200,600);

 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

 snowObj = new Snow(200,100,40);

  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(backgroundImage);  


  snowObj.display();



  drawSprites();
}