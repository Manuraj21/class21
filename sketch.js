var movingrect,fixedrect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200, 200, 50, 50);
  fixedrect=createSprite(350, 200, 50, 50);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}

function draw() {
  background("yellow");
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
 if(isTouching()){
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
 } 
 else{
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
 }

  drawSprites();
}







