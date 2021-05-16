var boyimage,boy, junk1a, junk2a, fruita,fruitb,fruitc,fruitd,fruite;
var fruit;
var backimage, back;
var stand,standgroup;
var fruitgroup;
var ground;
var score=0;


function preload()
{
  junk1a=loadImage("junk1.png");
  junk2a=loadImage("junk2.png");
  fruita=loadImage("apple.png");
  fruitb=loadImage("avagado.png");
  fruitc=loadImage("banana.png");
  fruitd=loadImage("melon.png");
  fruite=loadImage("orange.png");
  boyimage=loadImage("boy.png");
backimage=loadImage("background.jpg");  

}
function setup() {
  createCanvas(1200,400);
  ground=createSprite(50,400,1200,10);
  ground.visible=false;
  back=createSprite(200, 200, 50, 50);
  back.addImage(backimage);
  back.scale=2;
  back.velocityX=-2;
  boy=createSprite(50, 200, 50, 50);
  boy.addImage(boyimage);
  boy.scale=0.5;
  standgroup=new Group ();
  fruitgroup=new Group ();
}

function draw() {
  background(255,255,255);
  if(back.x<0)
  {
    back.x=200
  }  
  if(keyDown("UP_ARROW"))
  {
    boy.velocityY=-5
  }
  if(keyDown("LEFT_ARROW"))
  {
    boy.x=boy.x-10;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    boy.x=boy.x+20;
  }
  boy.velocityY=boy.velocityY+0.8
  boy.collide(ground);
  boy.collide(standgroup);
  spawnstand();
 
  
  
  drawSprites();
  stroke ("red");
  textSize(25);
  text("score:"+score,200,50);
  if(boy.isTouching(fruitgroup))
  {
    fruitgroup.destroyEach();
    fruitgroup.velocityXEach=0;
    score=score+10;
   
  }
  if(score===100)
  {
    stroke ("red");
textSize(50);
text("stomach full ",200,200);
fruitgroup.destroyEach();
  fruitgroup.velocityXEach=0;
ground.velocityX=0;
standgroup.velocityX=0;
stand.velocityX=0
boy.destroy();
stand.destroy();
back.velocityX=0;
  }
 
}
function spawnstand()
{
  if(frameCount%200===0)
  {
  stand=createSprite(700,200,100,10);
  stand.shapeColor="brown";
  stand.velocityX=-4;
  stand.debug=true;
  ground1=createSprite(700,220,100,10);
  ground1.velocityX=-4;
  ground1.debug=true;
  ground1.visible=false;
  stand.y=Math.round(random(100,300));
  ground1.y=stand.y+10;
 fruit=createSprite(700,200,10,10);
 fruit.y=stand.y-20
 fruit.velocityX=-4;
 fruit.scale=0.25;
 
 var  number=Math.round(random(1,7));

switch(number)
{
  case 1:
    fruit.addImage(fruita);
    break;
    case 2:
      fruit.addImage(fruitb);
    break;
    case 3:
      fruit.addImage(fruitc);
    break;
    case 4:
      fruit.addImage(fruitd);
    break;
    case 5:
      fruit.addImage(fruite);
    break;
    case 6:
      fruit.addImage(junk1a);
    break;
    case 7:
      fruit.addImage(junk2a);
    break;
    
    
}

fruitgroup.add(fruit);
standgroup.add(ground1);

  }
}751