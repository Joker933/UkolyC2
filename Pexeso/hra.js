let memory_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

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
    ctverecek.innerText = array[i];
    nacteni.appendChild(ctverecek);
    ctverecek.classList.add("cteverecek");
  }
}

//function klik() {
//  var x = document.getElementById("cteverecek").textContent;
//}

