import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {MovieDbAdapter} from '../../config/adapters/movieDb.adapter';
import {MovieFullEntity} from '../../core/entities/movie-full.entity';

interface useMovieProps {
  movieId: number;
}

export const useMovie = ({movieId}: useMovieProps) => {
  const [movie, setMovie] = useState<MovieFullEntity>();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const movieFull = await UseCases.GetByIdMovieUseCase(
      MovieDbAdapter,
      movieId,
    );
    setMovie(movieFull);
  };

  return {
    movie,
  };
};
