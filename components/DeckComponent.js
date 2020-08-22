import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {DeleteDeck} from '../actions/DecksActions'

class DeckComponent extends React.Component{

    deleteDeck = (id) => {

        
        this.props.dispatch(DeleteDeck(id))

        this.props.navigation.pop()
        
    }

    render(){

        let {navigation, route} = this.props

        let {item_id} = route.params

        return(
            <View style={{flex: 1, justifyContent: 'space-evenly',}}>
                <TouchableOpacity onPress={() => navigation.navigate('AddCard', {deck_id: item_id})}><Text style={styles.Button}>Add Card</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz',  {deck_id: item_id})}><Text style={styles.Button}>Start Quiz</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.deleteDeck(item_id)} ><Text style={{...styles.Button, color: 'red', }}>Delete Deck</Text></TouchableOpacity>
            </View>
        )



    }


}

const styles = StyleSheet.create({

    Button: {
        fontSize: 24,
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#555',
        backgroundColor: '#DDD',
        textAlign: 'center',
        padding: 10,
    }

})

function mapStateToProps(storeState){

    return {
        storeState,
    }
}

function mapDispatchToProps(dispatch){

    return {

        dispatch,
    }
}

export default connect(mapStateToProps)(DeckComponent)