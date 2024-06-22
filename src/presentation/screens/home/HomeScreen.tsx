import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {ScrollView} from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

  if (isLoading) {
    return <Text> Cargando ... </Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 10, marginBottom: 10}}>
        {/* nowPlaying */}
        <PosterCarousel movies={nowPlaying} />

        {/* popular */}
        <HorizontalCarousel
          loadNextPage={() => console.log('Fin del flatList')}
          movies={popular}
          title="Popular"
        />

        {/* popular */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />

        {/* popular */}
        <HorizontalCarousel movies={upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
};
