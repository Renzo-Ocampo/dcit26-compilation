import React  from "react";
import {View,Button, StyleSheet,Text,ScrollView,Image} from "react-native";

const About = ({navigation}) =>{
  return(
    <View style = {styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.text}> 
          The episode is about when a certain bigfoot spends the weekend at the Bears House. While Grizzly is the most hospitable to Charlie out of the three brothers, Panda has mixed feelings of Charlie's company. As Charlie's behaviour always gets on the nerve of Panda making him angry. While with Ice bear he was not pleased with Charlie's behaviour since his first impression to Ice Bear is from being overall disgusting and messy to ruining his dinner and making a mess of the cave. But in the long run, they are starting to understand each other and being friends.
          </Text>

                <View style = {styles.pad}>
                 <Button title="Back" onPress={()=> navigation.goBack()} />
                </View>
        </View> 
      </ScrollView>
   </View> 
  );
  
}
export default About;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbf80',
    padding: 20
  },
  text:{
    color: 'black',
    fontSize: 20,
    marginBottom: 20
  
  },
  pad:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

