import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import {MovieEntity} from '../../../core/entities/movie.entity';
import {FC, useEffect, useRef} from 'react';
import {PosterMovie} from './PosterMovie';

interface HorizontalCarouselProps {
  movies: Array<MovieEntity>;
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarousel: FC<HorizontalCarouselProps> = ({
  movies,
  title,
  loadNextPage,
}) => {
  const isLoading = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 300 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    // cargar las siguientes peliculas
    loadNextPage && loadNextPage();
  };

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
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={event => onScroll(event)}
      />
    </View>
  );
};
