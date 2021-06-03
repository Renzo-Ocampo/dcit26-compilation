//Oana, John Rendon
//Morales, Krissoel Jon
//Ocampo, Hugh Dylen Renzo 
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello world!
      </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  
  paragraph: {
    margin: 24,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});
