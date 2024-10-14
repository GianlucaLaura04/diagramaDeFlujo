function pantallas(){
  fill(146, 43, 33);
  strokeWeight(4);
  stroke(245, 176, 65);
  if (estado === 1) {
    image(fondos[1], 0, 0);
    text(txt[0],40,300);
    text(txt[1],40,320);
    text(txt[2],40,340);
    text(txt[3],40,360);
    text(txt[4],40,380);
  } else if (estado === 2) {
    image(fondos[2], 0, 0);
    text(txt[5],40,260);
    text(txt[6],40,280);
    text(txt[7],40,300);
  } else if (estado === 3) {
    image(fondos[3], 0, 0);
    text(txt[8],0,240);
    text(txt[9],0,260);
    text(txt[10],0,280);
  } else if (estado === 4) {
    image(fondos[4], 0, 0);
    text(txt[11],40,180);
    text(txt[12],40,200);
  } else if (estado === 5) {
    image(fondos[5], 0, 0);
    text(txt[13],40,180);
    text(txt[14],40,200);
  } else if (estado === 6) {
    image(fondos[6], 0, 0);
    text(txt[15],0,240);
    text(txt[16],0,260);
    text(txt[17],0,280);
  } else if (estado === 7){
    image(fondos[7], 0, 0);
    text(txt[18],0,160);
    text(txt[19],0,180);
    text(txt[20],0,200);
    text(txt[21],0,220);
  } else if (estado === 8) {
    image(fondos[8], 0, 0);
    text(txt[22],0,160);
    text(txt[23],0,180);
    text(txt[24],0,200);
    text(txt[25],0,230);
  } else if (estado === 9) {
    image(fondos[9], 0, 0);
    text(txt[26],0,260);
    text(txt[27],0,280);
    text(txt[28],0,300);
    text(txt[29],0,330);
  } else if (estado === 10) {
    image(fondos[10], 0, 0);
    text(txt[30],0,160);
    text(txt[31],0,180);
  } else if (estado === 11) {
    image(fondos[11], 0, 0);
    text(txt[32],0,160);
    text(txt[33],0,180);
    text(txt[34],0,200);
    text(txt[35],0,220);
  } else if (estado === 12) {
    image(fondos[12], 0, 0);
    text(txt[36],0,160);
    text(txt[37],0,180);
    text(txt[38],0,200);
    text(txt[39],0,220);
  } else if (estado === 13) {
    image(fondos[13], 0, 0);
    text(txt[40],0,260);
    text(txt[41],0,280);
    text(txt[42],0,300);
    text(txt[43],0,330);
  } else if (estado === 15) {
    image(fondos[15], 0, 0);
    text(txt[44],0,160);
    text(txt[45],0,180);
  } else if (estado === 16) {
    image(fondos[16], 0, 0);
    text(txt[46],0,200);
    text(txt[47],0,220);
    text(txt[48],0,240);
    text(txt[49],0,270);
  } else if (estado === 17) {
    image(fondos[17], 0, 0);
    text(txt[50],0,200);
    text(txt[51],0,220);
    text(txt[52],0,240);
    text(txt[53],0,260);
    text(txt[54],0,280);
 }
}
