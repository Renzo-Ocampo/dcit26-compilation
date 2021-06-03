import React  from "react";
import {View,Button, StyleSheet,Text} from "react-native";

const Home = ({navigation}) =>{
  return(
    <View style = {styles.container}>
    <Text style= {styles.we}>We <Text style= {styles.bare}>Bare</Text> </Text>
     
    <Text style= {styles.bears}>Bears</Text>
    <Text style= {styles.friend}> and a Friend  </Text>
      <Button title="Profile" onPress={()=> navigation.navigate('Profile')} />
      
    </View>
    
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbf80'
  },
  we:{
    fontSize: 40,
    
  },
  bare:{
    color: '#f75c4a',
    fontSize: 45,
    
  },
  bears:{
    color: '#d6b4b0',
    fontSize: 42,
    
  }
  ,
  friend:{
    color: '#80625e',
    fontSize: 30,
    fontStyle: 'italic',
    marginBottom: 10 
  }
})