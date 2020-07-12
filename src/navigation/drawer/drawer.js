
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { scale } from '../../helper/scaling';
import { Dimensions } from 'react-native';
import homeStack from '../homestack/homeStack';
import sectionStack from '../sectionstack/sectionStack';
import favoriteStack from '../favoritestack/favoriteStack';
import DrawerContent from './drawercontent/drawercontent';


const { width } = Dimensions.get('screen');


const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
    <Drawer.Navigator drawerStyle={{ width : width*0.9 }} drawerContent={props=> <DrawerContent {...props}/>} >
        <Drawer.Screen name="homeStack" component={homeStack}  />
        <Drawer.Screen name="sectionStack" component={sectionStack}  />
        <Drawer.Screen name="favoriteStack" component={favoriteStack}  />
    </Drawer.Navigator>
    );
  }

  export default AppDrawer;