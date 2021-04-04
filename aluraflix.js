var allMovies = [
  {
   "name": "Justice League",
   "image": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg",
   "year": 2021,
   "link": "https://www.imdb.com/title/tt12361974/?ref_=hm_fanfav_tt_i_1_pd_fp1",
   "trailer": "3cxixDgHUYw",
   "sound": "6QLQ2Es42ai2tr3YtEyBVT"
  },
  {
   "name": "Man of Steel",
   "image": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
   "year": 2013,
   "link": "https://www.imdb.com/title/tt0770828/?ref_=hm_fanfav_tt_i_6_pd_fp1",
   "trailer": "T6DJcgm3wNY",
   "sound": "6i1ufIZOfYKozqt9kEcgqF"
  },
  {
   "name": "Joker",
   "image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
   "year": 2019,
   "link": "https://www.imdb.com/title/tt7286456/?ref_=hm_fanfav_tt_i_11_pd_fp1",
   "trailer": "t433PEQGErc",
   "sound": "3BtU1VpwymF8thuirnY8rN"
  }
];

var divAllMovies = document.querySelector(".all-movies");
//var div = document.createElement("div");

var search = "off";
var movieFound = "no"

//if (search === "off" & movieFound === "no") {
for (var i = 0; i < allMovies.length; i++) {
  divAllMovies.innerHTML +=
    `<a href="${allMovies[i].link}" target="_blank">
    <div class="movies-area">
    <img src="${allMovies[i].image}" class="movie-found">
    <span>${allMovies[i].name}</span>
    <div class="year">
    <p>${allMovies[i].year}</p>
    </div>
    </div>
    </a>
    `
 };
//};

function showMovie(movie) {
  divAllMovies.innerHTML =
    `<a href="${movie.link}" target="_blank">
    <div class="movies-area">
    <img src="${movie.image}" class="movie-found">
    <span>${movie.name}</span>
    <div class="year">
    <p>${movie.year}</p>
    </div>
    </div>
    </a>
    <div id="trailler-id" class="trailer-style">
    <iframe width="350" height="200" src="https://www.youtube.com/embed/${movie.trailer}" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer-style"></iframe>
    <iframe src="https://open.spotify.com/embed/playlist/${movie.sound}" width="200" height="300" frameborder="1" allowtransparency="true" allow="encrypted-media" class="sound-style"></iframe>
    </div>
    `;
 }

function showErrorMsg() {
  document.getElementById("search-result").innerHTML = "Filme não encontrado. Você escreveu o nome corretamente?";
  divAllMovies.innerHTML = "";
  
}

function testMovie(movieSearched) {
  for (var i = 0; i < allMovies.length; i++) {
    if (movieSearched == allMovies[i].name.toLowerCase()) {
      showMovie(allMovies[i]);
      document.querySelector(".input-style").value = ""
      return;
    }
  }
  showErrorMsg();
};

function searchButton() {
  var input = document.getElementById("movie-to-search").value
  input = input.toLowerCase();
  testMovie(input);
};
