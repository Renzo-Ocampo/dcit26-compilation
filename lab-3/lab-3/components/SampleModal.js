//Morales, Krissoel Jon T.
//Oaña, John Rendon L.
//Ocampo, Hugh Dylen Renzo A.
//Santos, Ald Christian J.
//BSCS 3-1

import React from 'react';
import {View, Button, Modal, StyleSheet, Text, ScrollView, Image,} from 'react-native';

const SampleModal = (props) => {

  const styles = StyleSheet.create({

    picture: {
      height: 150,
      width: 150,
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 20
    },

    alignment: {
      padding: 20,
      textAlign: 'justify',
      marginTop: 3,
    },

    forbutton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },

  });

  return (
    <View>
      <Modal visible={props.visible}>
        <ScrollView>
          <View>
            <Image style={styles.picture} source={{ uri: 'https://panlasangpinoy.com/wp-content/uploads/2017/03/Sinigang-na-Baboy-with-Gabi-Panlasang-Pinoy.jpg'}}/>

            <Text style={styles.alignment}>
              This specific recipe uses pork belly as the main protein
              ingredient. I also use okra, daikon radish, snake beans (sitaw),
              ong choy (Chinese kangkong), and long green chili peppers (siling
              pangsigang). I use more vegetables because my kids love it.{' '}
              {'\n\n'}
              Start to cook sinigang by boiling onions and tomato. This provides
              flavor to the broth. Do this by boiling water in a wide and deep
              cooking pot. Add these ingredients after the water boils.{'\n\n'}

              Pork belly goes into the pot. Cook it for 25 to 30 minutes between
              low to medium heat. Add the taro and continue to boil in medium
              heat for 20 to 30 minutes or until the pork gets very tender. I
              like it when the gabi or taro melts into the soup and creates a
              thick consistency. This is the reason why I cook it longer. I also
              mash a piece or two in the middle of the cooking process.{'\n\n'}
              
              I add my Knorr Sinigang sa Sampaloc recipe mix afterwards. This is
              my go to ingredient when cooking sinigang. I have been using this
              since I started cooking. Back in the days, my mom will just say
              “bili ka ng pang sinigang na baboy” and I know exactly what to
              purchase. I also cook sinigang using other souring agents such as
              fresh sampaloc and kamias, but the convenience and result that
              this product gives me is remarkable.{'\n\n'}

              The seasonings can be added after putting the mix into the pot, or
              you can do it once the dish is cooked. For this recipe, I added
              fish sauce and ground black pepper right after the sinigang mix.
              Daikon radish is also added at this point. Let the radish cook for
              5 minutes before adding all the remaining vegetables.{'\n\n'}

              My family loves super sour sinigang. For this reason, I use more
              sinigang mix than what is suggested in the recipe below. If you
              prefer the same, you can always add more sinigang mix based on
              your preference. I also like to have a sauce with spicy fish sauce
              on my side when eating sinigang na baboy {'\n\n'}

              -Panlasang Pinoy

            </Text>
          </View>

          <View style={styles.forbutton}>
            <Button title="Close" color="#AFE4CD" onPress={props.hide} />
          </View>

        </ScrollView>
      </Modal>
    </View>
  );
};
export default SampleModal;
