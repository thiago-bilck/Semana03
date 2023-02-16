/* function countdownStart(){
  for (let index = 0; index < 10; index++) {
    console.log(index);
    
  }
}

function countdownStart() */

function olaAtrasado() {
  console.log("Olá atrasado");
}

var button = document.getElementById("button");

button = addEventListener("click", setTimeout.olaAtrasado(), 5000);
//setTimeout(olaAtrasado, 5000);
