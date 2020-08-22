import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeComponent from './HomeComponent'
import { connect } from 'react-redux';
import AddDeckView from '../views/AddDeckView'

var abc = ''

const Stack = createStackNavigator();

class AddDeckComponent extends React.Component{



    render(){

      return <View style={styles.container}>


        <Stack.Navigator>

  <Stack.Screen name="AddDeck" component={AddDeckView}  />
  <Stack.Screen name="Home" component={HomeComponent} />

  </Stack.Navigator>

      </View>

  }

  }
  



  const styles = StyleSheet.create({

    container: {

      flex: 1,
      justifyContent: 'flex-start',

    },

    textInput: {

      backgroundColor: '#ffffff',
      fontSize: 24,
      padding: 5,
      borderColor: '#555',
      borderStyle: 'solid',
      borderWidth: 1,
      marginTop: 10,
      

    },

    label: {

      fontSize: 18,

    },

    addDeckButton: {
      padding: 10, 
      marginVertical: 10,
      backgroundColor: '#555555', 
      alignItems: 'center',
    }


  })


  function mapDispatchToProps(dispatch){

    return {
      dispatch
    }

  }

  function mapStateToProps(storeState){

    return{
      storeState
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(AddDeckComponent)