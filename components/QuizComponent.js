import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import { connect } from 'react-redux'

class QuizComponent extends React.Component {

    state = {
        answers: {

        }
    }

    answerChangeText = (text, card_id) => {

        this.setState((previousState) => (
            {
                ...previousState,
                answers: {
                    ...previousState.answers,
                    [card_id]: { ...previousState.answers[card_id], answer: text }
                }
            }
        ))

    }

    componentWillMount() {

        let { cards } = this.props.storeState

            Object.keys(cards).map((card_id) => {

                this.setState((previousState) => (
                    {
                        ...previousState,
                        answers: { ...previousState.answers, [card_id]: { answer: '' } }
                    }

                ))

            })

        }


        SubmitAnswer = (deck_id) => {

            let correct_answers = 0
            let answers = []

            Object.keys(this.state.answers).map((card_id) => {

                let state_answer = this.state.answers[card_id].answer
                let store_answer = this.props.storeState.cards[card_id].answer

                if(state_answer === store_answer){

                    correct_answers++
                }

                answers.push(state_answer)

            })

            let resultObj = {
                correct_answers,
                answers,
                deck_id,

            }

            this.props.navigation.navigate('QuizResult', {result: {...resultObj}})

        }

    render() {

        let { storeState, navigation, route } = this.props

        let { deck_id } = route.params

        let {cards} = storeState

        let cardsKeys = Object.keys(cards)

        let cardsLength = 0

        cardsKeys.map((card_id) => {
            if(cards[card_id].deck_id === deck_id){
                cardsLength++
            }
        })

        if(cardsLength === 0){
            return <View><Text style={{fontSize: 24, textAlign: 'center', margin: 30,}} >There is no cards added yet .</Text></View>
        }

        return <ScrollView style={{ flex: 1, padding: 10, }}>

            {cardsKeys.map((card_id) => {

                if(cards[card_id].deck_id !== deck_id){
                    return
                }

                return <View key={card_id}>

                    <Text>{cards[card_id].question}</Text>

                    <TextInput style={styles.TextInput} placeholder='Write your answer ..' value={this.state.answers[card_id].answer} onChangeText={(text) => this.answerChangeText(text, card_id)}></TextInput>

                    <Text>{this.state.answers[card_id].answer}</Text>

                </View>

            })}

            <TouchableOpacity style={styles.answerButton} onPress={() => this.SubmitAnswer(deck_id)}><Text style={{ color: '#FFF', }}>Submit Answer</Text></TouchableOpacity>

        </ScrollView>

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

    answerButton: {

        padding: 10,
        marginVertical: 10,
        backgroundColor: '#555555',
        alignItems: 'center',

    }

}

function mapStateToProps(storeState) {

    return {
        storeState
    }
}

export default connect(mapStateToProps)(QuizComponent)