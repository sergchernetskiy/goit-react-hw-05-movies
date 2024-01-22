import PropTypes from 'prop-types';
import image from 'images/no-image-available.jpg';

import {
  List,
  Item,
  WrapperImg,
  ActorName,
  Character,
} from './ActorsList.styled';

const ActorsList = ({ actors }) => {
  return (
    <List>
      {actors.map(({ id, name, character, profile_path }) => {
        return (
          <Item key={id}>
            <WrapperImg>
              <img
                src={
                  { profile_path }
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : { image }
                }
                alt={name}
              />
            </WrapperImg>
            <ActorName>{name}</ActorName>
            {character && <Character>{character}</Character>}
          </Item>
        );
      })}
    </List>
  );
};

ActorsList.propTypes = {
  actorsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default ActorsList;
