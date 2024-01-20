import { useState, useEffect } from 'react';
import { getMovies } from 'service/movie-service';

export const useTrendingTodayMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoaded(true);

        const dataMovies = await getMovies('trending/all/day');

        const movies = dataMovies.results;

        setTrendingMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(false);
      }
    };
    fetch();
  }, []);

  return { trendingMovies, loaded, error };
};
