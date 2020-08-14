import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from '../../screens/homeScreen/homeScreen';
import {View} from 'react-native'

const Stack = createStackNavigator()

function homeStack() {
    return (
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="homeScreen" component={homeScreen} />
        </Stack.Navigator>
    );
  }

  export default homeStack;