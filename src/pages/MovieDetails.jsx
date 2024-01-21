import toast from 'react-hot-toast';

import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { useMovieDetails } from 'hooks/useMovieDetails';
import { getMovieGenres } from 'service/getMovieGenres';

const MovieDetails = () => {
  const { movie, loading, error } = useMovieDetails();

  return (
    <main>
      <section>
        <Container>
          {movie && <MovieCard movie={movie} getGenres={getMovieGenres} />}
          {error && toast.error('Something went wrong. 😔 Try again.')}
          {loading && <Loader />}
        </Container>
      </section>
    </main>
  );
};

export default MovieDetails;
