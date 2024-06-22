import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/now-playing.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieEntity} from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviePopularUseCase = async (
  fetcherHttpAdapter: HttpAdapter,
  options?: Options,
): Promise<MovieEntity[]> => {
  try {
    const popular = await fetcherHttpAdapter.get<NowPlayingResponse>(
      '/popular',
      {
        params: {
          page: options?.page ?? 1,
        },
      },
    );

    return popular.results.map(movie =>
      MovieMapper.fromMovieDBResultToEntity(movie),
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching popular`);
  }
};
