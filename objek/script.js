// membuat objek

// 1. objek literal
// let mhs = {
//   nama : "Akmal",
//   nim : "H071241065",
//   prodi : "Sistem Informasi"
// };


// Function Declaration

// const power = {
//   tidur : function(jam) {
//     this.energi += jam;
//     console.log(`selamat tidur ${this.nama}`);
//   },

//   makan : function(porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}` );
//   }
// };

// function objectMhs(nama, nim, prodi, energi) {
//   let objectMhs = Object.create(power);
//   objectMhs.nama = nama;
//   objectMhs.nim = nim;
//   objectMhs.prodi = prodi;
//   objectMhs.energi = energi;

//   return objectMhs;
// }

// let mhs2 = objectMhs("Akmal", "H071241065", "Sistem Informasi", 10);


// // Contructor
// function Mhasiswa(nama, nim, prodi) {
//   this.nama = nama;
//   this.nim = nim;
//   this.prodi = prodi
// }

// var mhs3 = new Mhasiswa("Akmal", "H071241065", "Sistem Informasi");




// versi class
class Mahasiswa {
  constructor(nama, energi){
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    console.log(`selamat makan ${this.nama}`);
  }

  tidur(jam) {
    this.energi += jam;
    console.log(`selamat tidur ${this.nama}`);
  }
}

let mhs1 = new Mahasiswa("Akmal", 10);