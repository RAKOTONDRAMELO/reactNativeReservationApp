import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import style1 from './styles/styleConnect'
import style2 from './styles/styleReservation'
import Carousel from './ImageCarousel'

function Catalogue() {
    return (
      <ScrollView style={{flex:1}} pagingEnabled>
        <View style={style1.container}>
          <Text style={style1.title}>
            A propos
          </Text>
          <Text style={style2.text}>
            Toutes nos salutations chers clients, Hifampitantsoa vous accueille 
            pour vos plus beaux évènements familiales (mariages, fiançailles, baptêmes, ... )
            et professionels (séminaires,réunions, ... ).
            Nous mettons à votre disposition une grande salle, situé à Soanierana 
            en plein centre ville, pouvant accueillir jusqu'à 200 personnes.
            Quelque soit vos évènements notre salle sauras répondre à vos attentes et besoins 
            de part sa décoration intérieure chic et neutre afin que chacun puisse la décorer à 
            son goût et à son aise.          
          </Text>
        </View>
        <View style={style1.container}>
          <Text style={style1.title}>
            Aperçu
          </Text>
        <Carousel />
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    stretch: {
      resizeMode: 'stretch'
    }
  });
export default Catalogue  