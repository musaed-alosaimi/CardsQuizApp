import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class ResultComponent extends React.Component {

    cardsNumber(item) {

        let count = 0

        let { cards } = this.props.storeState

        Object.keys(cards).map((key) => {

            let card = cards[key]

            if (card.deck_id === item) {

                count++

            }

        })

        return count

    }

    render() {

        let { navigation, route, storeState } = this.props

        let { cards } = storeState

        let { result } = route.params

        let {deck_id, deckCards, correctAnswersCount} = result

        let cardsNum = 0

        Object.keys(cards).map((card_id) => {

            if (cards[card_id].deck_id === result.deck_id) {
                cardsNum++
            }

        })

        return <View style={{ padding: 10, }}>

            <Text style={styles.row}>You Completed The Quiz !</Text>
            <Text style={styles.row}>Your Score is {correctAnswersCount} out of {this.cardsNumber(deck_id)}</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Quiz', { deck_id, deckCards })}><Text style={styles.repeatQuizButton}>Repeat Quiz</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.pop()}><Text style={styles.repeatQuizButton}>Back To Deck</Text></TouchableOpacity>

        </View>
    }
}

const styles = {

    card: {

        backgroundColor: '#EEE',
        borderStyle: 'solid',
        borderColor: '#555',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        fontSize: 18,
    },
    repeatQuizButton: {
        color: '#007AFF',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 15,
    },

    row: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
    }

}

function mapStateToProps(storeState) {

    return {
        storeState,
    }
}

export default connect(mapStateToProps)(ResultComponent)