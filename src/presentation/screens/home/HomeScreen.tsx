import {View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 10, marginBottom: 10}}>
        {/* nowPlaying */}
        <PosterCarousel movies={nowPlaying} />

        {/* popular */}
        <HorizontalCarousel
          loadNextPage={() => popularNextPage()}
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
