// destruction pada array
// function coba() {
//   return [1,2,5,3,4,8,7]
// }
// const [a, b, ...values] = coba();
// console.log(values);

// switch items
// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a,b);





// destruction pada object
// function coba() {
//   return obj = {
//     umur: 20,
//     alamat: 'Jl. Raya',
//     hobi: 'Membaca',
//   }

// }
// const {nama = "Akmal", umur : u, ...values} = coba();
// console.log(nama);


// // assignment tanpa deklarasi object
// ({nama, umur} = {nama : 'Akmal', umur : 18});
// console.log(nama, umur);


// mengambil field pada object setelah dikirim sebagai parameter oleh function
// const mhs = {
//   id: 12,
//   nama: 'Akmal',
//   umur: 20,
//   alamat: 'Jl. Raya',
// }

// function getIdMhs({id}) {
//   return id;
// }

// console.log(getIdMhs(mhs));
