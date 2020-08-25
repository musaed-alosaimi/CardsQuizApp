import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'

class QuizComponent extends React.Component {

    state = {
        correct_answers: 0,
        counter: 0,
        show_answer: false,
    }


    SubmitAnswer = (answer) => {

        if (answer === 'correct') {
            this.setState((previousState) => ({ ...previousState, correct_answers: previousState.correct_answers + 1, }))
        }

        this.setState((previousState) => ({ ...previousState, counter: previousState.counter + 1, show_answer: false, }))


    }

    ShowAnswer = () => {

        this.setState((previousState) => ({ ...previousState, show_answer: true, }))

    }

    render() {

        let { route } = this.props

        let { deck_id, deckCards } = route.params

        let cardsLength = deckCards.length

        if (cardsLength === 0) {
            return <View><Text style={{ fontSize: 24, textAlign: 'center', margin: 30, }} >There is no cards added yet .</Text></View>
        }


        if (this.state.counter === deckCards.length) {

            this.props.navigation.pop()
            this.props.navigation.navigate('QuizResult', { result: { correctAnswersCount: this.state.correct_answers, deck_id, deckCards } })

            return <View></View>

        }
        return <ScrollView style={{ flex: 1, padding: 10, }}>

                <Text style={styles.row}>Progress: {(this.state.counter + 1) + ' / ' + cardsLength}</Text>

                <Text style={styles.row}>{deckCards[this.state.counter].question}</Text>

                {!this.state.show_answer && <TouchableOpacity onPress={() => this.ShowAnswer()}><Text style={styles.showAnswerButton}>Show Answer</Text></TouchableOpacity>}
                <Text style={styles.answer} >{this.state.show_answer && deckCards[this.state.counter].answer}</Text>

                <TouchableOpacity style={{...styles.answerButton,backgroundColor: 'green'}} onPress={() => this.SubmitAnswer('correct')}><Text style={{ color: '#FFF', }}>Mark as correct</Text></TouchableOpacity>
                <TouchableOpacity style={{...styles.answerButton,backgroundColor: 'red'}} onPress={() => this.SubmitAnswer('incorrect')}><Text style={{ color: '#FFF', }}>Mark as incorrect</Text></TouchableOpacity>


        </ScrollView>

    }
}

const styles = {

    answerButton: {

        padding: 10,
        marginVertical: 10,
        backgroundColor: '#555555',
        alignItems: 'center',

    },

    showAnswerButton: {
        color: '#007AFF',
        fontSize: 18,
        textAlign: 'center',
    },

    answer: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10,
    },

    row: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
    }

}

function mapStateToProps(storeState) {

    return {
        storeState
    }
}

export default connect(mapStateToProps)(QuizComponent)