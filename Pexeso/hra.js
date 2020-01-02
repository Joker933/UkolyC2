let memory_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let otocene_karty = [];
let a;
let b;
let c=0;
let e=0;
let o=-1;
let i = 0;
let p = -1;
let z = -1;
let array2=[];


let array = [...memory_array, ...memory_array];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let party = shuffle(array);

window.onload = function() {
  let nacteni =  document.getElementById('herni_pole');
  for(let i = 0; i < array.length; i++) {
    let ctverecek = document.createElement('div');
    ctverecek.addEventListener("click", myFunction());
      ctverecek.innerText = array[i];
    nacteni.appendChild(ctverecek);
    ctverecek.classList.add("cteverecek");
    ctverecek.setAttribute("hidden", true);
    ctverecek.onclick = function(){     
      ctverecek.setAttribute("style", "font-size: 200%;");
      z++;
      ctverecek.setAttribute("id", z);
      o=z;
      array2[e++] = array[i];
      p++;
      c++;
      if(c%2 == 0){
        p--;
        if(array2[p] != array[i]){
          e--;
          o=z;
          o--;
          document.getElementById(o).setAttribute("style","font-size:200%;background-color: red;");
          ctverecek.setAttribute("style","font-size:200%;background-color: red;");
          setTimeout(
            () => {
              document.getElementById(o).setAttribute("style", "font-size: 0%; background-color: white;");
              ctverecek.setAttribute("style", "font-size: 0%; background-color: white;");
            },
            1000
          );
        }else{
          e--;
          o=z;
          o--;
          document.getElementById(o).setAttribute("style", "font-size: 200%; background-color: lime;");
          ctverecek.setAttribute("style", "font-size: 200%; background-color: lime;");
        }
    }
    } 
}
}
function myFunction(){
  if(a === null && b === null){
    a = ctverecek.innerText;
  } else if(a != null && b === null) {
    b = ctverecek.innerText;
  } else {

  }

  if(a === b) {
    otocene_karty = a;
  } else {
    a = null;
    b = null;
  }
}
