import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen} from '../screens/details/DetailsScreen';
import {HomeScreen} from '../screens/home/HomeScreen';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        // options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
