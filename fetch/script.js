// const form = document.getElementById('formSearch');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const search = document.getElementById('search').value;

//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=938a560a&s=' + search,
//     success: results => {
//       const movies = results.Search;
//       let cards = ''
  
//       movies.forEach( m => {
//         cards += showCards(m);
//       });
//       $('.card-container').html(cards);
  
//       $('.modal-button').on('click', function() {
//         $.ajax({
//           url: 'http://www.omdbapi.com/?apikey=938a560a&i=' + $(this).data('imdbid'),
//           success: m => {
  
//             const movieDetail = detailCards(m);
      
//             $('.example-modal').html(movieDetail);
  
//             const modal = document.getElementById('exampleModal');
//             const detail = document.querySelector('.modal-container');
  
//             setTimeout(() => {
//               modal.classList.add('scale-100');
//               detail.classList.add('opacity-100', 'scale-80');
//               }, 200);
  
//             $('.close-btn, .x-close').on('click', function() {
//               detail.classList.remove('opacity-100', 'scale-80');
//               setTimeout(() => {
//                   modal.classList.remove('scale-100');
//                   // Optional: Kosongkan modal setelah ditutup agar tidak menumpuk
//                   $('.example-modal').html(''); 
//               }, 300);
//             });

//           },
//             error: error => {
//             console.log(error.responseText);
//           }
//         })
//       });
//     },
//     error: error => {
//       console.log(error.responseText);
//     }
//   });
// })


const form = document.getElementById('formSearch');
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  showLoader();
  try {
    const inputKeywords = document.querySelector('#search');
    const movies = await getMovies(inputKeywords.value);
    console.log(movies)
    updateUI(movies);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});



const modalButton = document.querySelector('.card-container');
modalButton.addEventListener('click', async e => {
  if (e.target.classList.contains('modal-button')) {
    showLoader();
    try {
      const imdbid = e.target.dataset.imdbid;
      const detail = await getMovieDetail(imdbid);
      getUiDetail(detail);
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
    }
  }
  closeUiDetail();
});


// fungsi untuk ambil API
function getMovies(movies){
  return fetch('http://www.omdbapi.com/?apikey=938a560a&s=' + movies)
    .then(response => response.json())
    .then(response => response.Search)
    .catch(error => {console.log(error)});
}

// fungsi untuk menampilkan UI
function updateUI(ui) {
  let cards = '';
  ui.forEach(m => cards += showCards(m));
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = cards;
}

// fungsi untuk ambil API detail movie
function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=938a560a&i=' + imdbid)
  .then(response => response.json())
  .then(response => response); 
}

// fungsi untuk menampilkan UI movie detail
function getUiDetail(response) {
  const modal = document.querySelector('.example-modal');
  modal.innerHTML = detailCards(response);

  const detail = document.querySelector('.modal-container');

  setTimeout(() => {
    modal.classList.add('scale-100');
    detail.classList.add('opacity-100', 'scale-80');
  }, 200);
}

function closeUiDetail() {
  const pageDetail = document.querySelector('.example-modal');
  pageDetail.addEventListener('click', e => {
    if (e.target.classList.contains('close-btn') || e.target.classList.contains('x-close')) {
      const detail = document.querySelector('.modal-container');
      const modal = document.querySelector('.example-modal');
      detail.classList.remove('opacity-100', 'scale-80');
      setTimeout(() => {
        modal.classList.remove('scale-100');
      }, 300);
    }
  });
}

// fungsi untuk menampilkan card
function showCards(m){
  return `      
          <div class="max-w-[300px] rounded-lg p-5 shadow-lg shadow-[#312f2f] border border-slate-600 flex flex-col justify-between bg-linear-to-b from-[#222222] to-[#373737]">
            <div class="w-full ">
              <img src="${m.Poster}" alt="" class="rounded-md">
              <h2 class="text-lg font-bold text-slate-200">${m.Title}</h2>
              <h3 class="text-md py-2 text-slate-200">${m.Year}</h3>
            </div>
            <div class="">
              <button id="" data-imdbid="${m.imdbID}" class="bg-sky-400 py-1 px-3 rounded-lg font-semibold text-white cursor-pointer modal-button">Show detail</button></div>
            </div>`;
}
// fungsi untuk menampilkan detail film
function detailCards(m) {
  return `<div class="w-full max-w-xs mx-auto transition-all duration-200 ease-in-out scale-0 rounded-md shadow-md opacity-0 bg-white/20 backdrop-blur-2xl md:max-w-3xl modal-container">
              <div class="px-3 py-3 border-b border-slate-400">
                <h1 class="flex text-slate-300 items-center justify-between font-semibold">Detail <span class="text-2xl font-semibold cursor-pointer x-close ">×</span></h>
              </div>
      
              <div class="flex flex-wrap justify-center pt-5">
                <div class="flex justify-center w-full md:w-1/3 scale-80">
                  <img src="${m.Poster}" alt="" class="">
                </div>
                <div class="px-2 py-3 text-sm md:text-lg md:w-2/3">
                  <h1 class="py-3 text-2xl font-semibold border-b border-slate-400 text-slate-300">${m.Title}</h1>
                  <p class="py-2 border-b border-slate-400 text-slate-300"><span class="font-semibold">Director: </span>${m.Director}</p>
                  <p class="py-2 border-b border-slate-400 text-slate-300"><span class="font-semibold">Actors: </span>${m.Actors}</p>
                  <p class="py-2 border-b border-slate-400 text-slate-300"><span class="font-semibold">Writer: </span>${m.Writer}</p>
                  <p class="py-2 text-slate-300"><span class="font-semibold">Plot:</span><br>${m.Plot}</p>
                </div>
      
              </div>
              <div class="flex justify-end py-3 pr-2 border-t border-slate-400">
                <button class="px-3 py-1 bg-red-400 rounded-md cursor-pointer close-btn">Close</button>
              </div>
            </div>`;
}


// animasi loader
const load = document.querySelector('.loader');
function showLoader() {
  load.classList.remove('d-none');
}
function hideLoader() {
  load.classList.add('d-none');
}