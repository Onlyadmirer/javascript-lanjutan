// membuat objek

// 1. objek literal
let mhs = {
  nama : "Akmal",
  nim : "H071241065",
  prodi : "Sistem Informasi"
};


// Function Declaration
function objectMhs(nama, nim, prodi) {
  let objectMhs = {};
  objectMhs.nama = nama;
  objectMhs.nim = nim;
  objectMhs.prodi = prodi;

  return objectMhs;
}

var mhs2 = objectMhs("Akmal", "H071241065", "Sistem Informasi");


// Contructor
function Mhasiswa(nama, nim, prodi) {
  this.nama = nama;
  this.nim = nim;
  this.prodi = prodi
}

var mhs3 = new Mhasiswa("Akmal", "H071241065", "Sistem Informasi");