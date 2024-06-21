import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/now-playing.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieEntity} from '../../entities/movie.entity';

export const movieUpcomingUseCase = async (
  fetcherHttpAdapter: HttpAdapter,
): Promise<MovieEntity[]> => {
  try {
    const upcoming = await fetcherHttpAdapter.get<NowPlayingResponse>(
      '/upcoming',
    );
    return upcoming.results.map(movie =>
      MovieMapper.fromMovieDBResultToEntity(movie),
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching Upcoming`);
  }
};
