  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
 engine=Engine.create()
 world=engine.world
 var ground_properties ={
  isStatic: true
}

ground=Bodies.rectangle(200,390,200,20,ground_properties)
World.add(world,ground)
console.log(ground)

var bounce ={
  restitution : 1
}

ball = Bodies.circle(200,200,10,bounce);
World.add(world,ball);




}

function draw() {
  Engine.update(engine);
 
  background("black"); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
}