// spread operator => ...x


// menggabungkan dua varibel
// const mhs1 = ['Akmal', 'Asep', 'Ari'];
// const mhs2 = ['Budi', 'Cici', 'Dedi'];

// const mhs = [...mhs1, 'Adi', ...mhs2];
// // const mhs = mhs1.concat(mhs2);
// console.log(mhs)
// console.log(...mhs[0])


// meng-copy variabel
// const mhs1 = ['Akmal', 'Asep', 'Ari'];
// let mhs2 = [...mhs1];
// mhs2[0] = 'Adi';
// console.log(mhs1)


// nodeList to Array
// const mhs = document.querySelectorAll('li');
// const text = [...mhs].map(m => console.log(m.textContent))



// memisahkan setiap huruf kedalam array pada suatu element
const nama = document.querySelector('.nama');
const arrNama = [...nama.textContent].map(n =>`<span class="huruf">${n}</span>`).join('');
console.log(arrNama)

nama.innerHTML = arrNama;
