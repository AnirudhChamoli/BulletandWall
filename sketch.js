var Bullet , Wall , Thickness;
var Speed , Weight;

function setup ()
{
  createCanvas (1600,400)
  Bullet = createSprite (50,200,50,25);

  Speed = random(221,323);
  Weight = random(30,52);
  Thickness = random(22,83);

  Bullet.velocityX = Speed;
  Bullet.shapeColor=color(255,255,255);
}

function draw ()
{
  background (0,0,0);
  Wall = createSprite (1200,200, Thickness ,height/2);
  if (Hascollide(Bullet,Wall)){
    Bullet.velocityX = 0;
    var Damage = 0.5*Weight*Speed*Speed/(Thickness*Thickness*Thickness);
    if (Damage > 10){
      Wall.shapeColor =color(255,0,0);
    }
    if (Damage < 10) {
      Wall.shapeColor =color(0,255,0);
    }
  }
  drawSprites();
}

function Hascollide(O1,O2)
{
  BulletRightEdge=O1.x+O1.width;
  WallLeftEdge=O2.x;
  if(BulletRightEdge>=WallLeftEdge)
  {
     return true;
  }
  return false;
}