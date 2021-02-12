const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1, ball2, ball3, ball4, ball5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball1 = Bodies.circle(80,80,10, ball_options);
    ball2= Bodies.circle(150,50,15, ball_options);
    ball3 = Bodies.circle(190,90,20, ball_options);
    ball4 = Bodies.circle(230,100,25, ball_options);
    ball5 = Bodies.circle(270,100,30, ball_options);
    World.add(world,ball1);
    World.add(world,ball2);
    World.add(world,ball3);
    World.add(world,ball4);
    World.add(world,ball5);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,450,20);

    ellipseMode(RADIUS);
    ellipse(ball1.position.x, ball1.position.y, 10, 10);
    ellipse(ball2.position.x, ball2.position.y, 15, 15);
    ellipse(ball3.position.x, ball3.position.y, 20, 20);
    ellipse(ball4.position.x, ball4.position.y, 25, 25);
    ellipse(ball5.position.x, ball5.position.y, 30, 30);
}
