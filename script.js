const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
   console.log(data);
   let Hr = data.getHours();
   let Min = data.getMinutes();
   let Seg = data.getSeconds();
   console.log("Hora:" + Hr + "Minutos" + Min + "Segundo" + Seg);

  let posiçãoHr = (Hr*360/12)+(Min*(360/60)/12);
  let posiçãoMin = (Min*360/60)+(Seg*360/60)/(60);
  let posiçãoSeg = Seg*360/60;

  function executarRelógio(){ 
    posiçãoHr  = posiçãoHr+(3/360);
    posiçãoMin = posiçãoMin+(6/60);
    posiçãoSeg = posiçãoSeg+6;

  
  PONTEIROHORA.style.transform = "rotate(" + posiçãoHr + "deg)";
  PONTEIROMINUTO.style.transform = "rotate(" + posiçãoMin + "deg)";
  PONTEIROSEGUNDO.style.transform = "rotate(" + posiçãoSeg + "deg)";

}

var intervalo = setInterval(executarRelógio, 1000);