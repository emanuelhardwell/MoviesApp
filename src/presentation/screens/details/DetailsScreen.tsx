import {StackScreenProps} from '@react-navigation/stack';
import {Text} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {FC} from 'react';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

interface DetailsScreenProps
  extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen: FC<DetailsScreenProps> = ({
  route: {
    params: {movieId},
  },
}) => {
  const {loading, movie, casts = []} = useMovie({movieId});

  if (loading) {
    return <Text> Loading ... </Text>;
  }

  return (
    <ScrollView>
      {/* header */}
      <MovieHeader
        imageUri={movie!.poster}
        title={movie!.title}
        originalTitle={movie!.originalTitle}
      />

      <MovieDetails movie={movie!} casts={casts} />
    </ScrollView>
  );
};
