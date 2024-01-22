import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovies } from 'service/movie-service';

export const useReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);

        const { results } = await getMovies(`/movie/${movieId}/reviews`);

        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [movieId]);

  return { reviews, loading, error };
};
