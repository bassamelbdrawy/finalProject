import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import busketScreen from '../../screens/busketScreen/busketScreen';

const Stack = createStackNavigator();

function busketStack() {
    return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="busketScreen" component={busketScreen} />
        </Stack.Navigator>
    );
  }

  export default busketStack;