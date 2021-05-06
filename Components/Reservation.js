import React, { useState } from 'react';
import { View, TextInput,Button, TouchableOpacity,ScrollView,Text, ActivityIndicator } from 'react-native';
import styles from './styles/styleConnect' 
import InfoPerso from './InfoPerso'
import jsonReq from './FetchReq'

function Reservation(props) {
  var titreReservation = new Object()
  const screen = 'Calendar';
  const route ='booking';
  const [count, setCount] = useState(
            <InfoPerso 
              inscription={()=>{
                if ((titreReservation.nombreDePersonnes) && (titreReservation.nombreDePersonnes > 5) && (titreReservation.nombreDePersonnes <= 200)){
                  if (titreReservation.cin){
                    setCount(<ActivityIndicator size="large" color="#00ff00"/>)
                    jsonReq(titreReservation,props.navigation,screen,route)
                  }
                  else
                    alert("Veuillez verifier si tous les champs sont bien rempli et enlever les caractères spéciaux s'il y en a svp!!!")
                }else{
                  alert("Veuillez entrer un nombre de personnes entre 5-200")
                }
                
              }}
              retour={()=>{
                props.navigation.goBack()
              }}
              button1="Réserver"
              button2="Annuler"
              tableau={titreReservation}
            >
              <TextInput
                  style={styles.input}
                  placeholder="Date"
                  value = {props.route.params.date.daty}
                  placeholderTextColor="white"
              />
              <TextInput
                style={styles.input}
                placeholder="Nombres de personnes"
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength = {3}
                onChangeText= {(text) => {
                                {titreReservation.nombreDePersonnes=Number(text)}
                            }}
              />
            </InfoPerso>
  );
  titreReservation.date=props.route.params.date.daty
    return (
      <View style={[styles.container,{paddingTop:120,backgroundColor:"black"}]}>
        {count}
    </View>
    );
  }

export default Reservation