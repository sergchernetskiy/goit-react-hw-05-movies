export const getMovieGenres = movieGenres => {
  const nameGenres = movieGenres.map(genre => genre.name);

  if (nameGenres.length === 0) {
    return 'Other';
  }

  if (nameGenres.length > 3) {
    return `${nameGenres[0]}, ${nameGenres[1]}, ${nameGenres[2]}, 'Others'`;
  }

  return nameGenres.join(', ');
};
