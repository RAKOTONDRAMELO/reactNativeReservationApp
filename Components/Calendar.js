import React, { Component } from 'react'
import {Text,View,TouchableHighlight,ActivityIndicator,DevSettings,RefreshControl,ScrollView} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import styles from './styles/styleReservation'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ipServerLocal = "192.168.88.49";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vue1: 
        <View>
          <Text style={styles.text}>
            Veuillez sélectionner une date pour passer un réservation.
          </Text>
        </View>,
      reserve:
          <View>
            <ActivityIndicator size="large" color="#00ff00"/>
          </View>,
      refresh: false
    }
    this.selectedDate = this.selectedDate.bind(this);
    this.today = new Date() ;
    this.reservationLimiteDate = new Date(this.today.getFullYear(),this.today.getMonth(),(this.today.getDate()+7));
    this.dateReservé = [];
    this.refreshing = false;
};
  componentDidMount (){
    this.book()
  }
  onRefresh (){
    this.book()
    this.state.refresh = true 
    wait(3000).then(() => this.setState({refresh : false}))
  }
  
  book(){
    this.dateReservé=[]
    return (
      fetch ('http://'+ipServerLocal+'/indisponible')
        .then(response => response.json())
        .then(data => {
            var i=0
            for (;i<data.length;i++){
              this.dateReservé[i]=data[i].date
            }
              this.setState({
                reserve :
                  <View>
                    <CalendarPicker
                      onDateChange={this.selectedDate}
                      textStyle ={{
                                    color:"red"
                                  }
                                  }
                                    todayTextStyle = {{
                                    color: "white"
                                  }}
                      todayBackgroundColor = "red"
                      minDate = {this.reservationLimiteDate}
                      disabledDates = {this.dateReservé}
                    /> 
                  </View>
                })
          })
        .catch((error) => {
            alert("Erreur on a pas pu joindre le serveur,les dates déjà réservés ne seront pas affichés !!")
            this.setState({
              reserve :
                <View>
                  <CalendarPicker
                    onDateChange={this.selectedDate}
                    textStyle ={{
                                  color:"red"
                                }
                                }
                                  todayTextStyle = {{
                                  color: "white"
                                }}
                    todayBackgroundColor = "red"
                    minDate = {this.reservationLimiteDate}
                    disabledDates = {this.dateReservé}
                  /> 
                  
                </View>
            })
        })
        
    );
  }

  selectedDate(date) {
    var daty = new Date(date).toLocaleDateString()
    this.setState({
      vue1: 
        <View>
          <Text style={styles.text}>
            Vous avez sélectionner la date : {daty} {"\n"}
            Voulez-vous la réserver ?
          </Text>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="white"
            onPress={() => this.props.navigation.navigate('Booking',{date:{daty}})}
            style={
              {
                backgroundColor : "red",
                alignSelf : "center",
                padding: 20,
                borderRadius : 100
              }
            }>
            <Text style={styles.text}>Oui</Text>
          </TouchableHighlight>
        </View>
    });
  }
  
  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refresh}
            enabled={true}
            onRefresh={() => this.onRefresh()}
          />
        }
        style={{backgroundColor:"black"}}
      >
        <View style={styles.container}>
          {this.state.reserve}
          {this.state.vue1}
        </View>
      </ScrollView>
    );
  }
}

