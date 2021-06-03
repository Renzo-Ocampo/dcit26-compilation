import React, { useState, useEffect }  from 'react';
import {View, Text, ActivityIndicator, Image, StyleSheet, Button, TouchableOpacity} from 'react-native';

const Home = ({ navigation }) => {
    const styles = StyleSheet.create({

    picture: {
      height: 150,
      width: 150,
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 20
    },
    alignment: {
      padding: 10,
      textAlign: 'center',
      marginTop: 3,
      fontSize:20
    },
    container: {
      padding: 100,
    backgroundColor: '#b6c9f0'
    }

  });
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
      setData(json.results[0]);
      console.log(json.results[0]);
      })

    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

    useEffect(() => {
      fetchRandomData();
  }, []);

  return(
    <View style = {styles.container}>

      <TouchableOpacity onPress = {() => navigation.navigate('Profile', data)}>    
        {isLoading ? <ActivityIndicator size='large' color = "#0000ff"/> : (
      <Image style={styles.picture} source={data.picture.medium}/>      
    )}
      </TouchableOpacity>

        {isLoading ? <ActivityIndicator size='large' color = "#ffffff"/> : (
      <Text style={styles.alignment}>{data.name.first} {data.name.last}</Text>       
    )}
    
     <Button title="Randomize" color = '#f55c47' onPress={()=> fetchRandomData()} />
    </View>
  );
};

export default Home;
