import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class ResultComponent extends React.Component {

    render() {

        let { navigation, route, storeState } = this.props

        let {cards} = storeState

        let { result } = route.params

        let cardsNum = 0

        Object.keys(cards).map((card_id) => {

            if (cards[card_id].deck_id === result.deck_id) {
                cardsNum++
            }

        })

        return <View style={{padding: 10,}}>

            <Text>{result.correct_answers + ' / ' + cardsNum}</Text>

            {Object.keys(cards).map((card_id, index) => {

                return <View key={card_id} style={styles.card}>

                    <Text>{cards[card_id].question}</Text>

            <Text>My Answer: {result.answers[index]}</Text>

            <Text>Correct Answer: {cards[card_id].answer}</Text>

                </View>

            })}

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
}

function mapStateToProps(storeState) {

    return {
        storeState,
    }
}

export default connect(mapStateToProps)(ResultComponent)