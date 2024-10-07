import {View} from 'react-native';

import {MovieEntity} from '../../../core/entities/movie.entity';
import {FC} from 'react';
import {PosterMovie} from './PosterMovie';
import {ScrollView} from 'react-native-gesture-handler';

interface PosterCarouselProps {
  movies: MovieEntity[];
  height?: number;
}

export const PosterCarousel: FC<PosterCarouselProps> = ({
  movies,
  height = 440,
}) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <PosterMovie key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
