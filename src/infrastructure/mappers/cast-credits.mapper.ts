import {castCreditsEntity} from '../../core/entities/cast-credits.entity';
import {Cast} from '../interfaces/get-cast-credits.response';

export class castCreditsMapper {
  public static mapper(cast: Cast): castCreditsEntity {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? '---',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
