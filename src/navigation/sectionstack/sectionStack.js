import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import sectionScreen from '../../screens/sectionsScreen/sectionScreen';

const Stack = createStackNavigator();

function sectionStack() {
    return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="sectionScreen" component={sectionScreen} />
        </Stack.Navigator>
    );
  }

  export default sectionStack;