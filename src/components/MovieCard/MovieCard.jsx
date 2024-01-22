import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import image from 'images/no-image-available.jpg';
import { GoBackLink } from 'components/GoBackLink/GoBackLink.styled';
import {
  Wrapper,
  WrapperImage,
  ImageMovie,
  Info,
  MovieName,
  Text,
  Overview,
  Genres,
  AdditionalInfo,
  AdditionalInfoList,
  NavLinkItem,
} from './MovieCard.styled';

const MovieCard = ({
  movie: {
    title,
    original_title,
    poster_path,
    release_date = null,
    overview,
    genres,
    vote_average,
    vote_count,
  },
  getGenres,
}) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <GoBackLink to={backLinkLocationRef.current}>
        <p>Go back</p>
      </GoBackLink>

      <Wrapper>
        <WrapperImage>
          <ImageMovie
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : image
            }
            alt={title}
          />
        </WrapperImage>

        <Info>
          {{ title } ? (
            <MovieName>{title}</MovieName>
          ) : (
            <MovieName>{original_title}</MovieName>
          )}
          <Text>Release: {release_date}</Text>
          <Text>Vote average: {vote_average}</Text>
          <Text>Vote count: {vote_count}</Text>
          <Overview>Overview</Overview>
          <Text>{overview ? overview : 'No overview'}</Text>
          <Genres>Genres</Genres>
          <Text>{getGenres(genres)}</Text>
          <Wrapper>
            <AdditionalInfo>Additional information:</AdditionalInfo>
            <AdditionalInfoList>
              <li>
                <NavLinkItem to="cast">Cast</NavLinkItem>
              </li>
              <li>
                <NavLinkItem to="reviews">Reviews</NavLinkItem>
              </li>
            </AdditionalInfoList>
          </Wrapper>
        </Info>
      </Wrapper>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array.isRequired,
    vote_count: PropTypes.number,
  }).isRequired,
  getGenres: PropTypes.func.isRequired,
};

export default MovieCard;
