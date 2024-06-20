import {AxiosAdapter} from './http/axios.adapter';

export const MovieDbAdapter = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '7e5bf86f571cfe65b92dd8f94cf5e8f9',
    language: 'es',
  },
});
