import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/now-playing.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieEntity} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcherHttpAdapter: HttpAdapter,
): Promise<MovieEntity[]> => {
  try {
    const nowPlaing = await fetcherHttpAdapter.get<NowPlayingResponse>(
      '/now_playing',
    );

    return nowPlaing.results.map(movie =>
      MovieMapper.fromMovieDBResultToEntity(movie),
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching movies - Now Playing`);
  }
};
