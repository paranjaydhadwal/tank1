// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground,tank1,tank2,gun;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,390,1200,40);
    tank1=new Tanker(50+20+20+10,325+10+2+5+5,100+50,50);
    tank2=new Tanker(96,200+75+20+2,100,50);
    gun=new Gun(50-20-20-20,340-40,50+50,5+20-15,-(PI/5));
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
ground.display();
tank1.display();
tank2.display();
gun.display();
//triangle(48,274,145,274,97,204)
circle(100,324,15);
circle(200,324,15);
//gun =arc(50,50,100,180,360,true);
console.log(mouseX);
console.log(mouseY);
}


function keyReleased() {
    // Call the shoot method for the cannon.
}