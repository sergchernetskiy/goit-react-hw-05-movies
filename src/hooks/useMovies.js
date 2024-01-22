import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { getMovies } from 'service/movie-service';

export const useMovies = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchQuery = async () => {
      try {
        if (query === '') {
          return;
        }

        setLoading(true);

        const dataMoviesList = await getMovies(`/search/movie?query=${query}`);

        const moviesList = dataMoviesList.results;

        if (moviesList.length < 1) {
          toast(
            `Sorry, nothing found for your search ${query}! Try another query.`,
            {
              icon: '🍳',
              style: {
                borderRadius: '10px',
                background: '#56CCF2',
                color: '#fff',
              },
            }
          );
          return;
        }

        setMovies(moviesList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    searchQuery();
  }, [query]);

  return {
    movieQuery,
    setMovieQuery,
    movies,
    loading,
    error,
    setSearchParams,
    query,
  };
};
