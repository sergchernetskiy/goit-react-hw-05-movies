import { useTrendingTodayMovies } from 'hooks/useTrendingMovies';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import NotifyError from 'components/Notification/Notification';
import { Title } from './TrendingMovies.styled';

const TrendingMovies = () => {
  const { trendingMovies, loaded, error } = useTrendingTodayMovies();

  return (
    <>
      <Title>The most trending movies</Title>

      {trendingMovies.length > 1 && (
        <MoviesList movies={trendingMovies} linkTo="movies" />
      )}

      {error && <NotifyError />}

      {loaded && <Loader />}
    </>
  );
};

export default TrendingMovies;
