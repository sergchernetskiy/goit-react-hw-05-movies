import PropTypes from 'prop-types';
import { Item, Author, Content } from './ReviewsList.styled';

const ReviewsList = ({ ReviewsInfo }) => {
  return (
    <ul>
      {ReviewsInfo.map(({ id, author, content }) => {
        return (
          <Item key={id}>
            <Author>{`Author: ${author}`}</Author>
            <Content>{content}</Content>
          </Item>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  ReviewsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default ReviewsList;
