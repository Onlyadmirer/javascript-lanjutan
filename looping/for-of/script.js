// forEach hanya bisa pada array dan node list, tidak bisa pada string
// for of bisa pada string dan node list, tidak bisa pada object

// const nama = ['Akmal', 'Rahmad', 'Rahmawan'];

// // forEach
// nama.forEach((n, i) => {
//   console.log(`${n} adalah mahasiswa ke- ${i + 1}`);
// });

// // for of
// for ([i, n] of nama.entries() ) {
//   console.log(`${n} adalah mahasiswa ke- ${i + 1}`);
// }

// const nama = 'Akmal';

// for ( n of nama ){
//   console.log(n)
// }



// arguments
function jumlah() {
  let jumlah = 0;
  for ( a of arguments ) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlah(1,2,6,5,4,9));