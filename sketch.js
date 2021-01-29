const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boy;
var maxDrops=100;
var drops = [];

var thunder, thunder1, thunder2, thunder3, thunder4;
var thunderFrame=0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
   createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

boy = new umbrella(250,500);

if(frameCount%200 === 0){
for(var i=0; i<maxDrops; i++){
    drops.push(new drop(random(0,400),random(0,400)));
}
}
    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);

    if(frameCount%80===0){
        thunderFrame = frameCount;
        thunder = createSprite(random(50,250),random(30,50),10,10);
        switch(Math.round(random(1,4))){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:
                break;
        }
        thunder.scale = random(0.3,0.6);
    }

    if(thunderFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    boy.display();

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateDrop();
    }

    drawSprites();
}   

