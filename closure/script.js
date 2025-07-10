// function Factories/factory ?
function salam(waktu) {
  return function(nama) {
    console.log(`halo ${nama}, selamat ${waktu}`)
  };
}

let siang = salam('siang');
let malam = salam('malam');

siang('Akmal');



// immediately (....?) function & factory function
let hitung = (function () {
  let counter = 0;
  return function () {
    ++counter 
    return counter;
  }
})();

console.log(hitung());
console.log(hitung());
console.log(hitung());
console.log(hitung());
console.log(hitung());

