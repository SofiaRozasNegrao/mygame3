class Aviao{
  constructor(){
  }

  anda(){
    let aviao
    if(aviao){
      if(keyIsDown(UP_ARROW)&& aviao.position.x> height+250){
          console.log("socorro")
          aviao.position.x-=10
          }
      
        if(keyIsDown(DOWN_ARROW)&& aviao.position.x< height-250){
          aviao.position.x+=5
          }
      }
    }
  atira(){
        
  }
}


