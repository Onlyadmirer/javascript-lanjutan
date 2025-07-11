// const angka = [1,5,4,6,-5,-1,0,2,3,8,4];

// mencari angka >= 3

// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);


// filter
// const newAngka = angka.filter(angka => angka >= 3);
// console.log(newAngka);


// map
// const newAngka = angka.map(angka => angka * 2 );
// console.log(newAngka);

// // reduce
// const newAngka = angka.reduce((acc, current) => acc + current, 1);
// console.log(newAngka);

// method chaining
// const hasil = angka.filter(a => a > 5)
//   .map(a => a * 2)
//   .map(a => a -2 )
//   .reduce((acc, current) => acc + current, 0);

//   console.log(hasil);



const videos = Array.from(document.querySelectorAll('[data-duration]'));

const videoDuration = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
  .map(item => item.dataset.duration)
  .map(waktu => {
    const parts = waktu.split('.').map(int => parseFloat(int));
    return parts[0] * 60 + parts[1];
  }).reduce((acc, current) => acc + current, 0);


const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const jam = Math.floor(videoDuration / 3600);
const menit = Math.floor((videoDuration % 3600) / 60);
const detik = Math.floor((videoDuration % 3600) % 60);

const totalVideo = document.querySelector('.jumlah-video');
const totalDurasi = document.querySelector('.jumlah-durasi');

totalVideo.innerHTML = jumlahVideo;
totalDurasi.innerHTML = `${jam} jam ${menit} menit ${detik} detik`;

