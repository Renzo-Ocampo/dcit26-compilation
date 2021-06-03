import React, { useState, useEffect }  from 'react';
import {Text, ScrollView, StyleSheet, Image, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = ({route}) => {
  const data = route.params;

  return(
    <ScrollView style = {styles.layout}>
      <Image style={styles.picture} source={data.picture.medium}/>
      <Text style = {{fontWeight: 'bold', alignSelf: 'center'}}> {data.name.title} {data.name.first} {data.name.last} </Text>
      <Text style = {{fontStyle: 'italic', alignSelf: 'center'}}> @{data.login.username}</Text>

      <Text style = {styles.layoutheaders}> <MaterialIcons name="account-circle" size={24} color="black" /> About </Text>    
      <Text style = {styles.textlayout}> Gender: {data.gender}</Text>
      <Text  style = {styles.textlayout}> Birthday: {data.dob.date} </Text>
      <Text  style = {styles.textlayout}> Age: {data.dob.age} </Text>
      <Text  style = {styles.textlayout}> Address: {data.location.street.number} {data.location.street.name} {data.location.city}   </Text>
      <Text  style = {styles.textlayout}> {data.location.state} {data.location.country} {data.location.postcode} </Text>
      
      <Text style = {styles.layoutheaders}> <AntDesign name="contacts" size={24} color="black" /> Contact </Text>
      <Text style = {styles.textlayout1}> Email Address: </Text>
      <Text style = {styles.textlayout1}> {data.email}  </Text>
      <Text style = {styles.textlayout}> Telephone: {data.phone}  </Text>
      <Text style = {styles.textlayout}> Cellphone: {data.cell}  </Text>

      <Text style = {styles.layoutheaders}> <FontAwesome5 name="ellipsis-h" size={24} color="black" /> Other </Text>
      <Text> Date Registered: {data.registered.date}  </Text>
    </ScrollView>
  );
}
export default Profile;

const styles = StyleSheet.create ({
    picture: {
      height: 150,
      width: 150,
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 20,
      
      
    },
    layoutheaders:{
      textAlignVertical: 'top',
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 10,
      paddingTop: 10
      

    },
    layout:{
      padding: 20,
      
      backgroundColor: "#faf1e6"

    },
    textlayout:{
      padding: 3,
      flexDirection: 'row',
      textAlign: 'left'

    },
    textlayout1:{
      padding: 4

    }
  
  
})
