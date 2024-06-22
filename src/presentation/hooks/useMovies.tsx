import {useEffect, useState} from 'react';
import {MovieEntity} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {MovieDbAdapter} from '../../config/adapters/movieDb.adapter';

let popularPage = 1;

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<MovieEntity[]>([]);
  const [popular, setPopular] = useState<MovieEntity[]>([]);
  const [topRated, setTopRated] = useState<MovieEntity[]>([]);
  const [upcoming, setUpcoming] = useState<MovieEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(MovieDbAdapter);
    const popularPromise = UseCases.moviePopularUseCase(MovieDbAdapter);
    const topRatedPromise = UseCases.movieTopRatedUseCase(MovieDbAdapter);
    const upcomingPromise = UseCases.movieUpcomingUseCase(MovieDbAdapter);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  const popularNextPage = async (): Promise<void> => {
    popularPage++;

    const popularMovies = await UseCases.moviePopularUseCase(MovieDbAdapter, {
      page: popularPage,
    });
    setPopular(previous => [...previous, ...popularMovies]);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    popularNextPage,
  };
};
