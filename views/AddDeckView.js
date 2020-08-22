import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux';
import { AddDeck } from '../actions/DecksActions'
import { generateId } from '../helper/helper'


class AddDeckView extends React.Component {

    state = {
        DeckTitle: '',
        isDeckAdded: false,
    }

    deckTitle = ''

    addDeck = () => {

        this.props.dispatch(AddDeck({ id: generateId(), title: this.state.DeckTitle }))
        this.setState({isDeckAdded: true, })
        this.deckTitle = this.state.DeckTitle

    }

    render() {

        return <View style={{ padding: 20, }}>
            <Text style={styles.label}></Text>

            <TextInput placeholder="Type Deck Title .." style={styles.textInput} value={this.state.DeckTitle} onChangeText={(text) => this.setState({ DeckTitle: text })} />

            <TouchableOpacity title="Add Deck" style={styles.addDeckButton} onPress={this.addDeck} ><Text style={{ color: '#fff' }}>Add Deck Button</Text></TouchableOpacity>

            {this.state.isDeckAdded && <Text style={{fontSize: 24, textAlign: 'center', color: 'green', }} >{'The deck with title ' + this.deckTitle + ' is added'}</Text>}

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

    },

    label: {

        fontSize: 18,

    },

    addDeckButton: {
        padding: 10,
        marginVertical: 20,
        backgroundColor: '#555555',
        alignItems: 'center',
    }


})

function mapDispatchToProps(dispatch) {

    return {
        dispatch
    }

}



export default connect(null, mapDispatchToProps)(AddDeckView)
