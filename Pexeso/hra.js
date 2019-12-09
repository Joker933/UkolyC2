
let memory_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let otocene_karty = 0;
let awesomeDivik = null;

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
    ctverecek.innerText = array[i];
    nacteni.appendChild(ctverecek);
    ctverecek.classList.add("cteverecek");
    ctverecek.setAttribute("hidden", true);
    ctverecek.onclick = function(){
      ctverecek.setAttribute("style", "font-size: 200%;");
      otocene_karty++;
      console.log(otocene_karty);
    }
  }


