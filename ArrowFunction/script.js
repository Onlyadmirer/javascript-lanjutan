// Arrow function
// const salam = (nama, waktu) => {
//   return `halo ${nama}, selamat ${waktu}`;
// }
// console.log(salam("Akmal", "pagi"));

// implisit return
// const salam = nama => `halo ${nama}`;

// console.log(salam("Akmal"));

// // 
// let mhs = ['Akmal', 'ucu', 'yaya', 'fatur'];

// let hitung = mhs.map( nama => nama.length );
// console.log(hitung);


// // mengembalikan objek
// let mhs2 = ['Akmal', 'ucu', 'yaya', 'fatur'];

// let hitung2 = mhs2.map( nama => ({ nama, jumlahHuruh: nama.length }));
// console.table(hitung2)


// construktor function
// let Mahasiswa = function() {
//   this.nama = 'Akmal';
//   this.umur = 18;
//   this.sayHello = function() {
//     console.log(`Halo saya ${this.nama}, saya ${this.umur} tahun`);
//   }
// }
// let mhs = new Mahasiswa();


const box = document.querySelector('.box')

box.addEventListener('click', function() {
  let size = 'size';
  let color = 'color';

  if(box.classList.contains(size)) {
    [size, color] = [color, size];
  }

  this.classList.toggle(size);
  setTimeout(() => {
    this.classList.toggle(color);
  }, 600);
});