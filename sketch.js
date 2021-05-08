var parentBird,parentBirdImg;
var obstaclesImg;
var hunter,hunterImg1,hunterImg2;
var bg,bg1,bg2,backgroundImg1,backgroundImg2,backgroundImg3;
var playButton,playImg;
var nest,nestImg1;
var stoneImg1;
var kiteImg1,kiteImg2,kiteImg3,kiteImg4;
var obstacleGroup;
var gameState="start";
var life;


function preload(){
  parentBirdImg =loadImage("Images/Bird.png");
  obstaclesImg = loadImage("Images/Obstacles.png");
  backgroundImg1 = loadImage("Images/bg1.jpg");
  backgroundImg2 = loadImage("Images/bg2.png");
  backgroundImg3 = loadImage("Images/bg3.jpg");
  playImg = loadImage("Images/play1.png");
  nestImg1= loadImage("Images/Nest1.png");
  stoneImg1 = loadImage("Images/stone.png");
  hunterImg2 = loadImage("Images/hunter2.png")
  hunterImg1 = loadImage("Images/hunter3.png")
  kiteImg1 = loadImage("Images/kiteobstacle_image2.png");
  kiteImg2 = loadImage("Images/kiteobstaclesimage.png");
  kiteImg3 = loadImage("Images/kiteobstaclesimage3.png");
  kiteImg4 = loadImage("Images/kiteobstaclesimage4.png");
 
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();
  setStart();
  obstacleGroup = new Group();
}

function draw() {
  background(255,255,255); 
  //console.log(frameCount); 
  drawSprites();
  if(gameState === "start" && mousePressedOver(playButton)){    
      clear();
      bg.visible = false;
      parentBird.visible =false; 
      hunter.visible = false;
      levelOne();
      gameState = "level1";    
 
  } 
  if(gameState === "level1"){
      spawnObstacles();
      //console.log(frameCount);
    }

}
function setStart(){
  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(backgroundImg1);
  bg.scale = 6.4;
  //bg.visible = false;

  parentBird = createSprite(400,300);
  parentBird.addImage(parentBirdImg);
  parentBird.scale = 0.8;

  hunter = createSprite(1500,700);
  hunter.addImage(hunterImg1);
  hunter.scale = 0.8;

  playButton = createSprite(width/2,height/2);
  playButton.addImage(playImg);
  playButton.scale = 0.1;
 
}

function levelOne(){
  
  bg1=createSprite(width/2,height/2,width,height);
  bg1.addImage(backgroundImg2);
  bg1.scale = 1.9;

  nest = createSprite(width-270,height-760)
  nest.addImage(nestImg1);
  nest.scale = 0.7;

  parentBird1 = createSprite(100,100);
  parentBird1.addImage(parentBirdImg);
  parentBird1.scale = 0.3;

  //spawnObstacles();
  //console.log(frameCount);
  if(frameCount % 60 === 0){
    console.log("Hello");
  }
  

  }
  function spawnObstacles(){
    if(frameCount % 100 === 0){
    console.log("frame");
    obstacle = createSprite(width,Math.round(random(400,height-350)),50,50);
    obstacle.velocityX = -6;
    console.log("framecount");
    var rand = Math.round(random(1,4))
    switch(rand){
      case 1: obstacle.addImage(obstaclesImg);
              obstacle.scale = 0.3;
              break;
      case 2: obstacle.addImage(stoneImg1);
              obstacle.scale = 0.5;
              break;
      case 3: obstacle.addImage(kiteImg1)
              break;
      case 4: obstacle.addImage(kiteImg2);
              obstacle.scale = 0.8;
              break
    }
    obstacleGroup.add(obstacle)
    obstacle.lifetime = 1000;
  }

}