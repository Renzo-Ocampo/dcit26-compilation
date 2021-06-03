import React  from "react";
import {View,Button,StyleSheet,Text,ScrollView} from "react-native";

const Profile = ({navigation}) =>{
  return(
    
    <View style = {styles.container}>
    <Text style = {styles.Grizzly}> Grizzly </Text>
    <Text style = {styles.IceBear}> Ice Bear </Text>
    <Text style = {styles.Panda1}> Pan<Text style = {styles.Panda2}>da </Text> </Text>
    <Text style = {styles.Charlie}> Charlie </Text>
      <Button title="About" onPress={()=> navigation.navigate('About')} />
    </View>
    
    
  );
  
    
  
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbf80'
  },
  Grizzly:{
    color: "#804000",
    fontSize: 40,
    
  },
  IceBear:{
    color: 'white',
    fontSize: 45,
     
  },
  Panda1:{
    color: 'black',
    fontSize: 42,
     
  },
  Panda2:{
    color: 'white',
    fontSize: 42,
    
  },
  Charlie:{
    color: '#8c8c8c',
    fontSize: 30,
    fontStyle: 'italic',
    marginBottom: 10
  }
})