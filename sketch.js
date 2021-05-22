var surfer1, surferImg, octopus, octopusImg;
var water, waterImg, fort, fortImg, island, islandImg;
var rock, rockImg, coin, coinImg, b1,b1img;
var rockGroup, islandGroup, coinGroup, octopusGroup, fortGroup;
var gameState = "play"

function preload() {
  surferImg = loadImage("girlAngleOnly.png");
  waterImg = loadImage("water.jpg");
  octopusImg = loadImage("monster.png");
  fortImg = loadImage("fort.png");
  islandImg = loadImage("island.png")
  rockImg = loadImage("rock.png");
  coinImg = loadImage("coin.png");
  b1img = loadImage("water.jpg");
  rockGroup = new Group();
  islandGroup = new Group();
  coinGroup = new Group();
  octopusGroup = new Group();
  fortGroup = new Group();
}

function setup() {
  createCanvas(1600, 800);
  b1 = createSprite(300,350);
  b1.addImage(b1img);
  b1.velocityY = -2;
  b1.scale = 3;
  surfer1 = createSprite(150, 60, 20, 20);
  surfer1.addImage(surferImg);
  surfer1.scale = 0.05;
  surfer1.velocityY = 2;
 

}

function draw() {  
  background(255);
  if (b1.y <80 ){
    b1.y = height/2;
  }
if(gameState === "play"){
  {
    if(keyDown(UP_ARROW)){
      surfer1.y += -3
    }
    if(keyDown(DOWN_ARROW)){
      surfer1.y += 3
    }
    if(keyDown(RIGHT_ARROW)){
      surfer1.x += 3
    }
    if(keyDown(LEFT_ARROW)){
      surfer1.x += -3
    }
  }
  if(islandGroup.isTouching(surfer1)){
    surfer1.velocityY = 0
  }
}

  spawnrock();
  spawnfort();
  spawncoin();
  spawnoctopus();
  spawnisland();

  drawSprites();
}
function spawnrock(){
  if(frameCount % -100 === 0){
   rock = createSprite(90, 780, 20, 20);
  rock.addImage(rockImg);
    rock.x = Math.round(random(1,1400))
  rock.scale = 0.1;
    rock.velocityY = -3
    rock.lifetime = 300
  }
}
function spawnfort(){
  if(frameCount % -200 === 0 ){
    fort = createSprite(300, 780, 20, 20);
    fort.addImage(fortImg);
    fort.scale = 0.2;
    fort.x = Math.round(random(1,1400))
    fort.velocityY = -3
  }
}
function spawncoin(){
  if(frameCount % -50 === 0){
  coin = createSprite(450, 500, 20, 20);
    coin.addImage(coinImg);
    coin.scale = 0.05;
    coin.velocityY = -5
    coin.x = Math.round(random(300,1200))
  }
}
function spawnoctopus(){
  if(frameCount % -200 === 0){
    octopus = createSprite(500, 780, 20, 20);
    octopus.addImage(octopusImg);
    octopus.scale = 0.1;
     octopus.velocityY = -3;
      octopus.x = Math.round(random(1,1400));
}
}
function spawnisland(){
  if(frameCount % -250 === 0){
    island = createSprite(350, 780, 20, 20);
    island.addImage(islandImg);
    island.scale = 0.3;
     island.velocityY = -3;
      island.x = Math.round(random(1,1400));
}}