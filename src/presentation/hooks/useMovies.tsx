import {useEffect, useState} from 'react';
import {MovieEntity} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {MovieDbAdapter} from '../../config/adapters/movieDb.adapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<MovieEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      MovieDbAdapter,
    );
    return nowPlayingMovies;
  };

  return {};
};
