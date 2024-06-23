import {Text, View} from 'react-native';
import {MovieFullEntity} from '../../../core/entities/movie-full.entity';
import {FC} from 'react';
import {Currency} from '../../../config/helpers/currency';

interface MovieDetailsProps {
  movie: MovieFullEntity;
}

export const MovieDetails: FC<MovieDetailsProps> = ({movie}) => {
  return (
    <>
      <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 20}}>{movie.genres.join(',  ')}</Text>
        </View>

        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text>{movie.description}</Text>
        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text>{Currency.currencyUSD(movie.budget)}</Text>
      </View>
    </>
  );
};
