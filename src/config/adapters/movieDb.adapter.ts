import {THE_MOVIE_DB_KEY, THE_MOVIE_DB_URL} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const MovieDbAdapter = new AxiosAdapter({
  baseUrl: THE_MOVIE_DB_URL,
  params: {
    api_key: THE_MOVIE_DB_KEY,
    language: 'es',
  },
});
