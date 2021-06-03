import React  from "react";
import {Text,View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


const Drawer = createDrawerNavigator();

const MainNavigator = () =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack}
        options={{ drawerIcon:({focused, size, color, style})=>(<SimpleLineIcons name="home" size={25} color="black" />)}}
        />
        
        <Drawer.Screen name="About" component={AboutStack}
        options={{ drawerIcon:({focused, size, color, style})=>(<SimpleLineIcons name="bulb" size={25} color="black" />)}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;