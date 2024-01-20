import axios from 'axios';

const PER_PAGE = 20;
const API_KEY = '6e63ae3d3fa9b74b5acead8aeaa911b2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  per_page: PER_PAGE,
  api_key: API_KEY,
};

export const getMovies = async url => {
  const response = await axios.get(`${url}`);
  return response.data;
};
