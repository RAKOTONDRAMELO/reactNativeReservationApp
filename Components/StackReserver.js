import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles/styleReservation' 
import Reservation from './Reservation'
import Calendar from './Calendar'

const Stack = createStackNavigator();
const configTransitionScreen = {
    animation: 'spring',
    config: {
      stiffness: 100,
      damping: 100,
      mass: 2,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
function StackConnection() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            height: 120,
        },
        headerTitleAlign:"center",
        headerTitleStyle: {
            color:"white",
            fontSize:35,
        },
        headerTransparent:true,
        animationTypeForReplace:"push",
    }}
    >
    
      <Stack.Screen 
        name="Calendar" 
        component={Calendar}  
        
    />
      <Stack.Screen
        name="Booking" 
        component={Reservation}
        options={{
          transitionSpec: {
            open: configTransitionScreen,
            close: configTransitionScreen,
          },
        }}
        />
      <Stack.Screen 
        name="Réservation OK" 
        component={HomeOffice}
        options={{
          transitionSpec: {
            open: configTransitionScreen,
            close: configTransitionScreen,
          },
        }} 

        />
    </Stack.Navigator>
  );
}
function HomeOffice(props){
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="yellow" />
            <Text style={styles.text}>{props.route.params.text.data}</Text>
        </View>
    )
}
class BookingScreen extends React.Component{
    render(){
        return (
            StackConnection()
          );
    }
}
        
export default BookingScreen  