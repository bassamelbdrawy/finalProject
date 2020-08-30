import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import sectionScreen from '../../screens/sectionsScreen/sectionScreen';
import sectionDetailsScreen from '../../screens/sectionDetailsScreen/sectionDetailsScreen';
import itemDetailsScreen from '../../screens/itemDetailsScreen/itemDetailsScreen';
import loginScreen from '../../screens/loginScreen/loginScreen';
import registerScreen from '../../screens/registerScreen/registerScreen';

const Stack = createStackNavigator();

function loginStack() {
    return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="loginScreen" component={loginScreen} />
          <Stack.Screen name='registerScreen' component={registerScreen} />
        </Stack.Navigator>
    );
  }

  export default loginStack;