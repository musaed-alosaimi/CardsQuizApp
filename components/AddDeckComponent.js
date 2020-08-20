import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeComponent from './HomeComponent'
import { connect } from 'react-redux';
import {AddDeck} from '../actions/DecksActions'
import {generateId} from '../helper/helper' 


const Stack = createStackNavigator();

class AddDeckComponent extends React.Component{

  state = {
    DeckTitle: '',
  }

addDeck = () => {

this.props.dispatch(AddDeck({id: generateId(), title: this.state.DeckTitle}))

console.log(this.props.storeState)

}

    render(){

    const DeckView = (props) => {

  return <View>
          <Text style={styles.label}>What is the title of you new deck ?</Text>


  <TextInput placeholder="Deck Title" style={styles.textInput} value={this.state.DeckTitle} onChangeText={(text) => this.setState({DeckTitle: text})} />

  <TouchableOpacity title="Add Deck" style={styles.addDeckButton} onPress={this.addDeck} ><Text style={{color:'#fff'}}>Add Deck Button</Text></TouchableOpacity>

  </View>

    }

      return <View style={styles.container}>


        <Stack.Navigator>

  <Stack.Screen name="AddDeck" component={DeckView}  />
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