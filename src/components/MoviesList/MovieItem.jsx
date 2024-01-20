import PropTypes from 'prop-types';
import image from 'images/no-image-available.jpg';
import { Poster, MovieName } from './MovieItem.styled';

export const MovieItem = ({ poster_path, title, name }) => {
  return (
    <>
      <Poster>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : image
          }
          alt={title ? title : name}
        />
      </Poster>

      <MovieName>{title ? title : name}</MovieName>
    </>
  );
};

MovieItem.propStyles = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
};
