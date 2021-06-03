//Morales, Krissoel Jon T.
//Oaña, John Rendon L.
//Ocampo, Hugh Dylen Renzo A.
//Santos, Ald Christian J.
//BSCS 3-1

import React, {useState} from 'react';
import {StyleSheet, View , Button, Text} from 'react-native';

import SampleModal from './components/SampleModal';

export default function App (){
const styles = StyleSheet.create ({
  generaldesign:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  text:{
    fontSize: 24, 
    padding: 10, 
    fontWeight: "bold" }
})

const [isModalOpen, setModal] = useState(false);
  return(
  <View style = {styles.generaldesign}>
    <Text style={styles.text}>SINIGANG RECIPE</Text>
    <Button title='Click here' color='#AFE4CD' onPress={() =>setModal(true)} />
    <SampleModal visible ={isModalOpen} hide={()=>setModal(false)} />
  </View>
    );



}

