import axios from 'axios';

const key = '21877826-44f3194c1367c30c7423c56f3';

const searchApi = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default searchApi;
