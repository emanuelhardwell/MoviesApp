import {FlatList, Text, View} from 'react-native';
import {MovieEntity} from '../../../core/entities/movie.entity';
import {FC} from 'react';
import {PosterMovie} from './PosterMovie';

interface HorizontalCarouselProps {
  movies: Array<MovieEntity>;
  title?: string;
}

export const HorizontalCarousel: FC<HorizontalCarouselProps> = ({
  movies,
  title,
}) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            marginLeft: 10,
            marginBottom: 10,
            fontSize: 20,
            fontWeight: '300',
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <PosterMovie movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
