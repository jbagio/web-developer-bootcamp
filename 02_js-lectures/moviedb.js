const movies = [
  {
    title: 'Black Panther',
    hasWatched: false,
    rating: 'N/A'
  },
  {
    title: 'Oldboy',
    hasWatched: true,
    rating: 5
  },
  {
    title: 'Zatoichi',
    hasWatched: true,
    rating: 4.5
  },
  {
    title: 'The Avengers',
    hasWatched: false,
    rating: 'N/A'
  }
];

movies.forEach(function (movie) {
  let output = 'You have ' + (movie.hasWatched ? 'watched' : 'not watched');
  console.log(`${output} "${movie.title}" - ${movie.rating} stars.`);
});
