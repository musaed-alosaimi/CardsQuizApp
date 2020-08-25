import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { generateId } from '../helper/helper'
import { AddCard } from '../actions/CardsActions'

class AddCardComponent extends React.Component {

    state = {
        question: '',
        answer: '',
        isQuestionAdded: false,

    }

    question = '';

    addCard = (deck_id) => {

        // dispatch
        this.props.dispatch(AddCard({ id: generateId(), question: this.state.question, answer: this.state.answer, deck_id}))

        this.setState({ isQuestionAdded: true, question: '', answer: '', });

        this.question = this.state.question


    }

    render() {

        let { cards, navigation, route } = this.props

        let {deck_id} = route.params

        return <View style={{ flex: 1, padding: 10, }}>
            <Text>Question</Text>
            <TextInput style={styles.TextInput} value={this.state.question} onChangeText={(text) => this.setState({ question: text })} />
            <Text>Answer</Text>
            <TextInput style={styles.TextInput} value={this.state.answer} onChangeText={(text) => this.setState({ answer: text })} />

            <TouchableOpacity style={styles.addCardButton} onPress={() => this.addCard(deck_id)}><Text style={{ color: '#FFF', }}>Add Card</Text></TouchableOpacity>

            <Text style={styles.feedBack}>{this.state.isQuestionAdded && "The question '" + this.question + "' is added successfuly"}</Text>
        </View>


    }

}


const styles = {

    TextInput: {

        backgroundColor: '#EEE',
        borderStyle: 'solid',
        borderColor: '#555',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        fontSize: 18,
    },

    addCardButton: {

        padding: 10,
        marginVertical: 10,
        backgroundColor: '#555555',
        alignItems: 'center',

    },

    feedBack: {
        color: 'green',
         fontSize: 18,
         textAlign: 'center',
         marginTop: 15,


        }

}

function mapStateToProps(storeState) {

    return {
        storeState
    }

}

function mapDispatchToProps(dispatch) {

    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardComponent)