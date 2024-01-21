import PropTypes from 'prop-types';
import { Form, Input, BtnSearch } from './SearchBox.styled';

const SearchBox = ({ handleSubmit, value, setMovieQuery }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          autoComplete="off"
          placeholder="Search movie"
          name="query"
          value={value}
          onChange={e => setMovieQuery(e.target.value)}
        />
      </label>
      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setMovieQuery: PropTypes.func.isRequired,
};

export default SearchBox;
