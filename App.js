//Your final app.js with stack navigator and tab navigator
import React,{createContext} from 'react';
import { Button, Text, View, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeComponent from './components/HomeComponent'
import AddDeckComponent from './components/AddDeckComponent'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'
import {DecksReducer} from './reducers/DecksReducer'
import {CardsReducer} from './reducers/CardsReducer'
import {setLocalNotification, clearLocalNotification} from './helper/helper'

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialTopTabNavigator();

let store = createStore(combineReducers({decks: DecksReducer, cards: CardsReducer}))

class App extends React.Component {

  componentDidMount(){

  }

    render(){

      return (
        <Provider store={store}>
          <TouchableOpacity onPress={() => setLocalNotification()} style={{padding: 30,}}><Text>Set Notification</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => clearLocalNotification()} ><Text>Clear Notification</Text></TouchableOpacity>
          <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              color = '#36a5c7'
              if (route.name === 'Home') {
                  iconName = focused

                  ? 'ios-home'
                  : 'md-home';
                } else if (route.name === 'AddDeck') {
                  iconName = focused
                  ? 'ios-list-box'
                  : 'ios-list';
                }
          
          return <Ionicons name={iconName} size={size} color={color}     />;
            },
          })}
      tabBarOptions={{
          activeTintColor: '#36a5c7',
          inactiveTintColor: 'gray',
          }}>
              <Tab.Screen name="Home" component={HomeComponent} />
              <Tab.Screen name="AddDeck" component={AddDeckComponent} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      );

    }

}


export default App