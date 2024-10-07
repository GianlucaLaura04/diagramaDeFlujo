function botonesEleccion(){
  fill(0,0,200);
  rect(100,400,100,50);
  rect(425,400,100,50);
  if(mouseX>100 && mouseX<100+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    }
  if(mouseX>425 && mouseX<425+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    }
}

function botonSig(){
  fill(0,0,200);
  rect(265,400,100,50);
  if(mouseX>265 && mouseX<265+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed === true){ 
    estado++;
 }
}
