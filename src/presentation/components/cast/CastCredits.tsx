import {FC} from 'react';
import {castCreditsEntity} from '../../../core/entities/cast-credits.entity';
import {Image, Text, View} from 'react-native';

interface CastCreditsProps {
  cast: castCreditsEntity;
}

export const CastCredits: FC<CastCreditsProps> = ({cast}) => {
  return (
    <View style={{marginRight: 15, width: 90}}>
      <Image
        source={{uri: cast.avatar}}
        style={{
          width: 85,
          height: 120,
          borderRadius: 15,
        }}
      />
      <Text style={{fontWeight: 'bold'}}>{cast.name}</Text>
      <Text>{cast.character}</Text>
    </View>
  );
};
