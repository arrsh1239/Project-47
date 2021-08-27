var player
var player_running
var zombie
var zombie_running
var background
var invisibleGround
var barrier
var barrierImage
var rock
var rockImage
var playerCollided
var zombieCollided
var bullet
function preload(){
    player_running = loadAnimation("game1 - Copy.png","game2 (1).png","game3.png","game4.png","game5.png","game6.png")
    playerCollided = loadImage("game1 - Copy.png")
    zombie_running = loadAnimation("ZOMBIE1.png","ZOMBIE2.png","ZOMBIE3.png","ZOMBIE4.png","ZOMBIE5.png","ZOMBIE6.png","ZOMBIE7.png","ZOMBIE8.png")
    zombieCollided = loadImage("ZOMBIE1.png")
    backgroundImage = loadImage("Game Background-3.png")
    barrierImage = loadImage("barrier.png") 
    rockImage = loadImage("rock.png") 
    bulletImage = loadImage("bullet.png")
  }
function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  ground.addImage(backgroundImage)
  ground.x = ground.width /2;
  ground.velocityX = -2
  ground.scale = 2.8

  invisibleGround = createSprite(400,680,2200,30)
  invisibleGround.shapeColor = "#110E13"

  player = createSprite(200,680,50,50)
  player.addAnimation("playerrunning",player_running)
  player.addImage("collided",playerCollided)
  //player.debug = true
  player.setCollider("rectangle",-15,0,50,170)

  player.scale = 1.2

  zombie = createSprite(2400,570,50,50)
  zombie.addAnimation("zombieRunning",zombie_running)
  zombie.addImage("collided",zombieCollided)
  zombie.scale = 1.8
  zombie.velocityX = -7

  barrier = createSprite(800,640,10,10)
  barrier.addImage(barrierImage)
  barrier.scale = 0.4
  barrier.velocityX = -7
  //barrier.debug = true
  
  rock = createSprite(1600,640,10,10)
  rock.addImage(rockImage)
  rock.scale = 0.2
  rock.velocityX = -7

  bullet = createSprite(230,530,50,50)
  bullet.addImage(bulletImage)
  bullet.scale = 0.2
  bullet.visible = false
}
function draw() {
  background("black");
  if (ground.x < 0){
    ground.x = ground.width/2;
  }  
   
  if(keyDown("space") && player.y >= 100) {
    player.velocityY = -12;
  }
  if(keyDown("B") && player.y >= 500) {
    bullet.velocityX = 12;
    bullet.visible = true
  }
  

  
  if(barrier.position.x < -1000){
    barrier.position.x = 2400
  }
  if(rock.position.x < -1500){
    rock.position.x = 3200
  }
  if(zombie.position.x < -500){
    zombie.position.x = 1600
  }
  if(player.isTouching(zombie)){
    ground.velocity.x = 0
    player.velocity.x = 0
    rock.velocity.x = 0
    zombie.velocity.x = 0
    barrier.velocity.x = 0
    player.changeAnimation("collided",playerCollided)
    zombie.changeAnimation("collided",zombieCollided)
  }
  if(player.isTouching(rock)){
    ground.velocity.x = 0
    player.velocity.x = 0
    rock.velocity.x = 0
    zombie.velocity.x = 0
    barrier.velocity.x = 0
    player.changeAnimation("collided",playerCollided)
    zombie.changeAnimation("collided",zombieCollided)
  }
  if(player.isTouching(barrier)){
    ground.velocity.x = 0
    player.velocity.x = 0
    rock.velocity.x = 0
    zombie.velocity.x = 0
    barrier.velocity.x = 0
    player.changeAnimation("collided",playerCollided)
    zombie.changeAnimation("collided",zombieCollided)
  }
  if(bullet.isTouching(zombie)){
    zombie.position.x = 2400
    bullet.velocity.x = 0
    bullet.position.x = 220 
    bullet.visible = false
  }
  player.velocityY = player.velocityY + 0.6
  player.collide(invisibleGround) 
  drawSprites();
}
