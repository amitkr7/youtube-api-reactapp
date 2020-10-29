import axios from 'axios';

const KEY = 'AIzaSyDFhjmXCUXqlGeBL4Hd10ZYd2j3DxSUjQs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
