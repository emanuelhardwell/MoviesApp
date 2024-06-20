import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/now-playing.response';
import {MovieEntity} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcherHttpAdapter: HttpAdapter,
): Promise<MovieEntity[]> => {
  try {
    const nowPlaing = await fetcherHttpAdapter.get<NowPlayingResponse>(
      '/now_playing',
    );

    console.log(nowPlaing);

    return [];
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching `);
  }
};
