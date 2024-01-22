import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovies } from 'service/movie-service';

export const useCast = () => {
  const [actors, setActors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);

        const { cast } = await getMovies(`/movie/${movieId}/credits`);

        setActors([...cast]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [movieId]);

  return { actors, loading, error };
};
