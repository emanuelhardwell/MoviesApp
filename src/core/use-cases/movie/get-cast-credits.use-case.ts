import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {GetCastCreditsResponse} from '../../../infrastructure/interfaces/get-cast-credits.response';
import {castCreditsMapper} from '../../../infrastructure/mappers/cast-credits.mapper';
import {castCreditsEntity} from '../../entities/cast-credits.entity';

export const getCastCreditsUseCase = async (
  fetcherHttpAdapter: HttpAdapter,
  movieId: number,
): Promise<castCreditsEntity[]> => {
  try {
    const casts = await fetcherHttpAdapter.get<GetCastCreditsResponse>(
      `/${movieId}/credits`,
    );
    return casts.cast.map(cast => castCreditsMapper.mapper(cast));
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetcher movie - getCastCreditsUseCase`);
  }
};
