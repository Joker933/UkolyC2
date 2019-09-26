
window.onload = function() {
  var x = prompt("Zadej Hodnotu X");
  var y = prompt("Zadej Hodnotu Y");

  var pitagoras = x * x + y * y;

  if(Math.sqrt(pitagoras) > 5){
      document.getElementById("log1").innerHTML="Cíl je v dosahu!";
  } else {
    document.getElementById("log2").innerHTML="Cíl není v dosahu!";
  }
}