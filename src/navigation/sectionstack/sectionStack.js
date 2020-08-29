import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import sectionScreen from '../../screens/sectionsScreen/sectionScreen';
import sectionDetailsScreen from '../../screens/sectionDetailsScreen/sectionDetailsScreen';
import itemDetailsScreen from '../../screens/itemDetailsScreen/itemDetailsScreen';
import loginScreen from '../../screens/loginScreen/loginScreen';

const Stack = createStackNavigator();

function sectionStack() {
    return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="sectionScreen" component={sectionScreen} />
          <Stack.Screen name="sectionDetailsScreen" component={sectionDetailsScreen}/>
          <Stack.Screen name="itemDetailsScreen" component={itemDetailsScreen}/>
          <Stack.Screen name="loginScreen" component={loginScreen}/>
        </Stack.Navigator>
    );
  }

  export default sectionStack;