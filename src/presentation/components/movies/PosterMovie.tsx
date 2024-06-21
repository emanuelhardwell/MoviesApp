import {Image, StyleSheet, View} from 'react-native';
import {MovieEntity} from '../../../core/entities/movie.entity';
import {FC} from 'react';

interface PosterMovieProps {
  movie: MovieEntity;
}

export const PosterMovie: FC<PosterMovieProps> = ({movie}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: movie.poster}} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: 300,
    height: 400,
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
