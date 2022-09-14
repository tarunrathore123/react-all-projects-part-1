import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID aaFB5nlPgC7beUTZ8oCaR16l-v8zPMIGlDR23XzF5yU',
  },
});
