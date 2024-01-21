import toast from 'react-hot-toast';

import { useTrendingTodayMovies } from 'hooks/useTrendingMovies';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Title } from './TrendingMovies.styled';

const TrendingMovies = () => {
  const { trendingMovies, loaded, error } = useTrendingTodayMovies();

  return (
    <>
      <Title>The most trending movies</Title>

      {trendingMovies.length > 1 && (
        <MoviesList movies={trendingMovies} linkTo="movies" />
      )}

      {error && toast.error('Something went wrong. 😔 Try again.')}

      {loaded && <Loader />}
    </>
  );
};

export default TrendingMovies;
