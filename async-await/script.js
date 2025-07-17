// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Ok!')
//   }, 2000);
// });
// console.log(coba);
// coba.then(coba => console.log(coba));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if( waktu < 5000 ) {
      setTimeout(() => {
        resolve('Ok!')
      }, 2000);
    } else {
      reject('kelamaan')
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.error(error);
  }
}
cobaAsync();