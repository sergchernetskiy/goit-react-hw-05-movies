import PropTypes from 'prop-types';
import { List, Item, LinkItem } from 'components/MoviesList/MoviesList.styled';
import { MovieItem } from './MovieItem';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            {
              <LinkItem to={`${movie.id}`}>
                <MovieItem {...movie} />
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
