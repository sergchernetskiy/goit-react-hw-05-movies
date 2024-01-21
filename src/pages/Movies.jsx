import toast from 'react-hot-toast';
import { Container } from 'components/Container/Container';
import { useMovies } from 'hooks/useMovies';
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const {
    movieQuery,
    setMovieQuery,
    movies,
    loading,
    error,
    setSearchParams,
    query,
  } = useMovies();

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedValue = e.target.elements.query.value.toLowerCase();
    const nextSearchParams =
      movieQuery !== '' ? { query: normalizedValue } : {};
    setSearchParams(nextSearchParams);
  };

  return (
    <main>
      <section>
        <Container>
          <SearchBox
            handleSubmit={handleSubmit}
            value={movieQuery}
            setMovieQuery={setMovieQuery}
          />
          {query && <MoviesList movies={movies} />}
          {error && toast.error('Something went wrong. 😔 Try again.')}
          {loading && <Loader />}
        </Container>
      </section>
    </main>
  );
};

export default Movies;
