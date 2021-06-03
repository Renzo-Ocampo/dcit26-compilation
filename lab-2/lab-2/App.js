//BSCS 3-1
//Morales, Krissoel Jon T.
//Oaña, John Rendon
//Ocampo, Hugh Dylen A.
//Santos, Ald Christian J.

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [userInput, newUserInput] = useState('');
  const [outputText, setOutputText] = useState([]);
  const input = (value) => {
    newUserInput(value);
  };
  const addInput = () => {
    setOutputText((currentItems) => [...currentItems, [userInput]]);
    newUserInput('');
  };
  const styles = StyleSheet.create({
    container: {
      padding: 30,
    },
    inputorientation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemdesign: {
      backgroundColor: '#660000',
      padding: 15,
      marginTop: 3,
      borderColor: 'grey',
      borderWidth: 1,
      color: 'white'
    },
    inputborder: {
      padding: 10,
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputorientation}>
        <TextInput
          style={styles.inputborder}
          placeholder="Enter Item"
          onChangeText={input}
          value={userInput}
        />
        <Button title="Add" onPress={addInput} />
      </View>
      <View style={styles.itemposition}>
        {outputText.map((text) => (
          <Text style={styles.itemdesign}>{text}</Text>
        ))}
      </View>
    </View>
  );
}
