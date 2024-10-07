function preload() {
  for (let i=1; i<18; i++) {
    fondos[i] = loadImage("data/fondo"+i+".jpg");
 }
}

function setup() {
createCanvas(640,480);
background(0);
print(fondos);
}


function draw() {
  pantallas()
  botonSig()
  //botonesEleccion();
  
}
