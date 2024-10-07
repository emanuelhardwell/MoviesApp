import {MovieEntity} from '../../core/entities/movie.entity';
import {Result} from '../interfaces/now-playing.response';

export class MovieMapper {
  static fromMovieDBResultToEntity(movie: Result): MovieEntity {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: movie.release_date,
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  }
}
