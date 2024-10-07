import {MovieFullEntity} from '../../core/entities/movie-full.entity';
import {GetByIdMovieResponse} from '../interfaces/get-by-id.response';

export class MovieFullMapper {
  static mapper(movie: GetByIdMovieResponse): MovieFullEntity {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: movie.release_date,
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,

      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map(genre => genre.name),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(
        company => company.name,
      ),
    };
  }
}
