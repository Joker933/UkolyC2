
window.onload = function() {
  var x = prompt("Zadej Hodnotu X");
  var y = prompt("Zadej Hodnotu Y");

  if(x <= 5){
    if(y <= 5){
      document.getElementById("log1").innerHTML="Cíl je v dosahu!";
    } else {
      document.getElementById("log2").innerHTML="Cíl není v dosahu!";
    }
  } else {
    document.getElementById("log2").innerHTML="Cíl není v dosahu!";
  }
}