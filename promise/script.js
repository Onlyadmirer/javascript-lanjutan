// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//   success: movies => console.log(movies),
// })

// promise
// objek yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronus dimasa yang akan datang
// janji ( terpenuhi / ingkar )
// promise memiliki 3 state
// 1. pending ( menunggu )
// 2. resolved ( terpenuhi )
// 3. rejected ( ingkar )
// promise memiliki 2 method
// 1. then ( jika promise terpenuhi )
// 2. catch ( jika promise ingkar )
// 3. finally ( jika promise terpenuhi atau ingkar )

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati ){
//     resolve('janji telah ditepati!')
//   } else {
//     reject('janji tidak ditepati!')
//   }
// });

// janji1
// .then(mesage => console.log(`OK : ${mesage}`))
// .catch(message => console.log(`NOT OK : ${message}`))

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati ){
//     setTimeout(() => {
//       resolve('janji telah ditepati!')
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       reject('janji tidak ditepati!')
//     }, 1000);
//   }
// });

// console.log('mulai')

// janji1
// .finally( () => console.log('selesai mengambil data') )
// .then(mesage => console.log(`OK : ${mesage}`))
// .catch(message => console.log(`NOT OK : ${message}`))

// console.log('selesai')



// const film = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([{
//         judul: 'Avengers',
//         tahun: 2019,
//         sutradara: 'Russo',
//       }]);
//       reject('failed');
//     }, 1000);
// });

// const cuaca = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([{
//         kota: 'Makassar',
//         temp: 26,
//         kondisi: 'Mendung',
//       }]);
//       reject('failed');
//     }, 1000);
// });


// Promise.all([film, cuaca])
//   .finally( () => console.log('selesai mengambil data') )
//   .then(response => {
//     const [film, cuaca] = response;
//     console.log('film:', film);
//     console.log('cuaca:', cuaca);
//   })

