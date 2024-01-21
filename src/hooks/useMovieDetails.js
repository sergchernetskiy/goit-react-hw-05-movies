import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovies } from 'service/movie-service';

export const useMovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);

        const dataMovie = await getMovies(`/movie/${movieId}`);

        setMovie(dataMovie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [movieId]);

  return { movie, loading, error };
};
