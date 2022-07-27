let aviao,aviaoImg
let nuvem,nuvemImg,nuvens
let boom, boomImg
let asteroide, asteroideImg
let jogo=1
let bala
let grupoAst

function setup() {
  createCanvas(windowWidth,windowHeight);

  asteroideImg= loadImage("ast.png")

  aviao=createSprite(400,windowHeight/2,50,50)
  aviaoImg=loadImage("aviao.png")
  aviao.addImage(aviaoImg)
  aviao.scale=0.8
}

function draw() {
  background(96,200,240);  

  aviao=new Aviao
  grupoAst=new Group()

  /*if(keyIsDown(UP_ARROW) && aviao.position.y>73){
    aviao.y-=5
    }

  if(keyIsDown(DOWN_ARROW) && aviao.position.y<windowHeight-65){
    aviao.y+=5
  }*/

  if(frameCount % 100=== 0){
    let asteroide=createSprite(windowWidth+50,(random(-20,200)),10,50)
    asteroide.addImage(asteroideImg)
    asteroide.scale=0.1
    asteroide.velocityX=-2;
    asteroide.velocityY=2;
    asteroide.lifetime=windowHeight+100;
    grupoAst.add(asteroide)
  }

  drawSprites();
}