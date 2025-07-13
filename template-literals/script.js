// const mhs = {
//   nama: 'Muhammad Hafidz',
//   umur: 20,
//   alamat: 'Jl. Raya Jakarta',
//   hobi: 'Makan'
// };

//
// const el = `<div class="mhs">
//   <h1>Nama: ${mhs.nama}</h1>
//   <h2>Umur: ${mhs.umur}</h2>
//   <h3>Alamat: ${mhs.alamat}</h3>
//   <h4>Hobi: ${mhs.hobi ? `${mhs.hobi}` : ''}</h4>
// </div>`;

// document.body.innerHTML = el;


// 
// const mhs = {
//   nama: 'Muhammad Hafidz',
//   umur: 20,
//   alamat: 'Jl. Raya Jakarta',
//   hobi: ['Makan', 'Main Game', 'Nonton', 'Jalan-Jalan']
// };

// function hobiMhs(hobi) {
//   return `
//   <h2>Hobi:</h2>
//   <ol>
//    ${hobi.map(h => `<li>${h}</li>`).join('')}
//   </ol>
//   `;
// }

// const el = `<div class="mhs">
//   <h1>Nama: ${mhs.nama}</h1>
//   <h2>Umur: ${mhs.umur}</h2>
//   <h3>Alamat: ${mhs.alamat}</h3>
//   ${hobiMhs(mhs.hobi)}`;

// document.body.innerHTML = el;



// tag template

const user = {
  nama: 'Muhammad Hafidz',
  umur: 20,
}

function style(strings, ...values) {
  return strings.reduce((acc, str, i) => `${acc}${str}<span class="hl">${values[i] || ""}</span> `, "")
}


const hello = style`Halo nama saya ${user.nama}, saya ${user.umur} tahun`;

document.body.innerHTML = hello;