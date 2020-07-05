import React from 'react';
import {View} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import introScreen from '../screens/introScreen/introScreen';
import homeScreen from '../screens/homeScreen/homeScreen';




export const switchNav =  createAppContainer(createSwitchNavigator(
    {
      introScreen: introScreen,
      homeScreen: homeScreen,
    },
    {
      initialRouteName: 'introScreen',
    }
  ));

