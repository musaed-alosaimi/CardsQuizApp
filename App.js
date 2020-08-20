//Your final app.js with stack navigator and tab navigator
import React,{createContext} from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeComponent from './components/HomeComponent'
import AddDeckComponent from './components/AddDeckComponent'
import DetailsComponent from './components/DetailsComponent'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'
import {DecksReducer} from './reducers/DecksReducer'
import {CardsReducer} from './reducers/CardsReducer'


const Tab = createBottomTabNavigator();

let store = createStore(combineReducers({decks: DecksReducer, cards: CardsReducer}))

class App extends React.Component {

  componentDidMount(){

    

  }

    render(){

      return (
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
              let iconName;
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
          activeTintColor: 'tomato',
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