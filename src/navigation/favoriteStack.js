import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import favoriteScreen from '../screens/favoriteScreen/favoriteScreen';

const Stack = createStackNavigator();

function favoriteStack() {
    return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="favoriteScreen" component={favoriteScreen} />
        </Stack.Navigator>
    );
  }

  export default favoriteStack;