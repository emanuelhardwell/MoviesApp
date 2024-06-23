import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {FC} from 'react';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';

interface DetailsScreenProps
  extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen: FC<DetailsScreenProps> = ({
  route: {
    params: {movieId},
  },
}) => {
  const {loading, movie} = useMovie({movieId});

  if (loading) {
    return <Text> Loading ... </Text>;
  }

  return (
    <View>
      {/* header */}
      <MovieHeader
        imageUri={movie!.poster}
        title={movie!.title}
        originalTitle={movie!.originalTitle}
      />
    </View>
  );
};
