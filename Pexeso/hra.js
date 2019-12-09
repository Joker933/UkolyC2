
let memory_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let otocene_karty = [];
let a;
let b;
let i = 0;


let array = [...memory_array, ...memory_array];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let party = shuffle(array);
console.log(party);

window.onload = function() {
  let nacteni =  document.getElementById('herni_pole');
  for(let i = 0; i < array.length; i++) {
    let ctverecek = document.createElement('div');
    ctverecek.addEventListener("click", () => {
      if(a === null && b === null){
        a = ctverecek.innerText;
        console.log(a);
      } else if(a != null && b === null) {
        b = ctverecek.innerText;
        console.log(b);
      } else {

      }

      if(a === b) {
        otocene_karty = a;
        this.console.log(otocene_karty);
      } else {
        a = null;
        b = null;
        this.console.log(a);
        this.console.log(b);
      }
      
    });
    ctverecek.innerText = array[i];
    nacteni.appendChild(ctverecek);
    ctverecek.classList.add("cteverecek");
    ctverecek.setAttribute("hidden", true);
    ctverecek.onclick = function(){
      ctverecek.setAttribute("style", "font-size: 200%;");
      i++;
      if(i === 2){
        i = 0;
        ctverecek.setAttribute("style", "font-size: 0%;");
      } else {
        ctverecek.setAttribute("style", "font-size: 200%;");
        i = i;
      }
    }
  }
}
