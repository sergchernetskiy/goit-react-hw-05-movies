import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, Item, LinkItem } from 'components/MoviesList/MoviesList.styled';
import { MovieItem } from './MovieItem';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            {
              <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieItem {...movie} state={{ from: location }} />
              </LinkItem>
            }
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
