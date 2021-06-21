var ship, ship_sailing; 
var sea;
function preload(){
   ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
   seaImage = loadImage("sea.png")
   }

function setup(){ 
  createCanvas(600,280);
 
  sea = createSprite(290,140,200,800)
  sea.addImage(seaImage)
  sea.scale = 0.15; 

  ship = createSprite(300,120,100,100)
  ship.addAnimation("sailing",ship_sailing)
  ship.scale = 0.2 
   }
function draw() { 
  background("lightBlue");
 if (sea.x<0) {
   sea.x = sea.width/2
 }
 drawSprites();
}