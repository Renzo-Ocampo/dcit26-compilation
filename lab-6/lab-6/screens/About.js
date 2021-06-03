import React  from "react";
import {View,Button,Stylesheet} from "react-native";

const About = ({navigation}) =>{
  return(
    <View>
      <Button title="Back" onPress={()=> navigation.goBack()} />
    </View>
  );
}
export default About;