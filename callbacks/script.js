// syncrhonus callback
// function halo(n) {
//   alert(`halo ${n}`);
// }
// function tampilPesan(callback) {
//   const nama = prompt('masukkan nama')
//   callback(nama);
// }
// tampilPesan((nama => alert(`halo ${nama}`)));



// asynchronus callback vanilla js
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if( xhr.readyState == 4 && xhr.status == 200 ) {
//       success(JSON.parse(xhr.responseText));
//     } else if( xhr.status >= 400 ) {
//     error(xhr.statusText);
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// };

// getDataMahasiswa('/callbacks/data/mahasiswa.json', results => {
//   results.forEach(mhs => console.log(mhs.nama));
// }, error => {
//   console.log(error);
// })



// asynchronus callback query js
// console.log('mulai');
// $.ajax({
//   url: '/callbacks/data/mahasiswa.json',
//   success: mhs => {
//     mhs.forEach(m => console.log(m.nama));
//   },
//   error: error => {
//     console.log(error.responseText);
//   }
// });

// setTimeout(() => {
//   console.log('Fathur');
// }, 1000);

// console.log('selesai');
 