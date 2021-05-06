import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackReserver from './StackReserver'
import Catalogue from './Catalogue'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
        tabBarOptions={
            {
            style:{
                backgroundColor:"black",
                borderColor:"black",
            },
            activeTintColor: '#e91e63',
            showLabel: true
            }
        }
        initialRouteName="Home"
    >
      <Tab.Screen 
      name="Catalogue" 
      component={Catalogue} 
      options={
            {
                tabBarLabel:"Home",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
            }
        } 
      />
      
      <Tab.Screen 
      name="Réservation" 
      component={StackReserver} 
      options={
            {
                tabBarLabel:"Booking",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="calendar-clock" color={color} size={size} />
                    ),
            }
        } 
      />
      
    </Tab.Navigator>
  );
}

export default MyTabs