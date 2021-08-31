import Axios from 'axios';

const proxy = Axios.create({
  baseURL: process.env.VUE_APP_API_LOCATION,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
});

export default proxy;
