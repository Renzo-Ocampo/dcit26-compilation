import React  from "react";
import {Text,View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


const Drawer = createDrawerNavigator();

const MainNavigator = () =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack}/>
        
        <Drawer.Screen name="About" component={AboutStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;