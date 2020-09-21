var movingRect,FixedRect;
var movingRect1,FixedRect1;
function setup() {
 createCanvas(800,800);
 fixedRect = createSprite(600, 400, 100, 50);
 movingRect = createSprite(500, 500, 50, 80);
 
 fixedRect.shapeColor = "brown";
 movingRect.shapeColor = "brown";

 fixedRect1 = createSprite(300, 100, 50, 50);
 movingRect1 = createSprite(300, 500, 50, 50);

 fixedRect1.shapeColor = "pink";
 movingRect1.shapeColor = "purple";

 fixedRect1.velocityY = 1;
 movingRect1.velocityY = -1;
}
 
function draw() {
 background(255,255,255); 
 movingRect.x = mouseX;
 movingRect.y = mouseY;
 if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x <=  fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y <=  fixedRect.height/2 + movingRect.height/2){
   fixedRect.shapeColor = "green";
   movingRect.shapeColor = "green";
 }
 else{
   fixedRect.shapeColor = "brown";
   movingRect.shapeColor = "brown";
 }

 if(movingRect1.x - fixedRect1.x <= fixedRect1.width/2 + movingRect1.width/2
  && fixedRect1.x - movingRect1.x <=  fixedRect1.width/2 + movingRect1.width/2){
    fixedRect1.velocityX = fixedRect1.velocityX * (-1);
    movingRect1.velocityX = movingRect1.velocityX * (-1);
 }

 if(movingRect1.y - fixedRect1.y <= fixedRect1.height/2 + movingRect1.height/2
  && fixedRect1.y - movingRect1.y <=  fixedRect1.height/2 + movingRect1.height/2){
    fixedRect1.velocityY = fixedRect1.velocityY * (-1);
    movingRect1.velocityY = movingRect1.velocityY * (-1);
 }

 drawSprites();
}
