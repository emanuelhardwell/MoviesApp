import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {GetByIdMovieResponse} from '../../../infrastructure/interfaces/get-by-id.response';
import {MovieFullMapper} from '../../../infrastructure/mappers/movie-full.mapper';
import {MovieFullEntity} from '../../entities/movie-full.entity';

export const GetByIdMovieUseCase = async (
  fetcherHttpAdapter: HttpAdapter,
  movieId: string,
): Promise<MovieFullEntity> => {
  try {
    const getByIdMovie = await fetcherHttpAdapter.get<GetByIdMovieResponse>(
      movieId,
    );

    return MovieFullMapper.mapper(getByIdMovie);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - GetByIdMovieUseCase');
  }
};
