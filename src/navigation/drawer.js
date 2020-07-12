
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { scale } from '../helper/scaling';
import { Dimensions } from 'react-native';
import homeStack from './homeStack';
import sectionStack from './sectionStack';
import favoriteStack from './favoriteStack';


const { width } = Dimensions.get('screen');


const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
    <Drawer.Navigator drawerStyle={{
        width,
        backgroundColor:'#FFDD00'}}>
        <Drawer.Screen name="homeStack" component={homeStack}  />
        <Drawer.Screen name="sectionStack" component={sectionStack}  />
        <Drawer.Screen name="favoriteStack" component={favoriteStack}  />
    </Drawer.Navigator>
    );
  }

  export default AppDrawer;