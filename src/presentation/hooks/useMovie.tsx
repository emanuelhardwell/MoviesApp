import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {MovieDbAdapter} from '../../config/adapters/movieDb.adapter';
import {MovieFullEntity} from '../../core/entities/movie-full.entity';
import {castCreditsEntity} from '../../core/entities/cast-credits.entity';

interface useMovieProps {
  movieId: number;
}

export const useMovie = ({movieId}: useMovieProps) => {
  const [movie, setMovie] = useState<MovieFullEntity>();
  const [casts, setCasts] = useState<castCreditsEntity[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setLoading(true);
    const movieFull = await UseCases.GetByIdMovieUseCase(
      MovieDbAdapter,
      movieId,
    );
    setMovie(movieFull);

    const casts = await UseCases.getCastCreditsUseCase(MovieDbAdapter, movieId);
    setCasts(casts);

    setLoading(false);
  };

  return {
    loading,
    movie,
    casts,
  };
};
