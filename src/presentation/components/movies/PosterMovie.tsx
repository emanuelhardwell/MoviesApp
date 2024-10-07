import {Image, Pressable, StyleSheet, View} from 'react-native';
import {MovieEntity} from '../../../core/entities/movie.entity';
import {FC} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigator';

interface PosterMovieProps {
  movie: MovieEntity;
  width?: number;
  height?: number;
}

export const PosterMovie: FC<PosterMovieProps> = ({
  movie,
  width = 300,
  height = 420,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingBottom: 20,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: movie.poster}} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // width: 300,
    // height: 400,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
