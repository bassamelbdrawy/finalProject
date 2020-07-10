import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import introScreen from '../screens/introScreen/introScreen';
import homeScreen from '../screens/homeScreen/homeScreen';

const Stack = createStackNavigator();

function AppNav() {
    return (
        <NavigationContainer>
        <Stack.Navigator headerMode='none' >
          <Stack.Screen name="introScreen" component={introScreen} />
          <Stack.Screen name="homeScreen" component={homeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
  }

  export default AppNav;