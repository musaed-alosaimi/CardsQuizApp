import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { DeleteDeck } from '../actions/DecksActions'

class DeckComponent extends React.Component {

    state = {
        deckCards: {},
        isDeckDeleted: false,
    }

    deleteDeck = (id) => {

        this.props.dispatch(DeleteDeck(id))

        this.props.navigation.pop()

        this.setState({ isDeckDeleted: true, })

    }

    render() {

        if (this.state.isDeckDeleted)
            return <View></View>

        let { navigation, route, storeState } = this.props

        let { decks, cards } = storeState

        let { item_id } = route.params

        let deckTitle = decks[item_id].title

        let deckCardsObj = {}

        Object.values(cards).map((card) => {

            if (card.deck_id === item_id) {

                console.log(card)

                deckCardsObj = { ...deckCardsObj, [card.id]: card }

            }
            return ""

        })

        let deckCards = Object.values(deckCardsObj)

        let cardsNumber = deckCards.length

        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'stretch', textAlign: 'center', }}>

                <Text style={styles.Text}>Deck Title: {deckTitle}</Text>
                <Text style={styles.Text}>Cards Number: {cardsNumber}</Text>

                <TouchableOpacity onPress={() => navigation.navigate('AddCard', { deck_id: item_id })}><Text style={styles.Button}>Add Card</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz', { deck_id: item_id, deckCards })}><Text style={styles.Button}>Start Quiz</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => this.deleteDeck(item_id)} ><Text style={{color: 'red', textAlign: 'center', fontSize: 24,}}>Delete Deck</Text></TouchableOpacity>
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
    },

    Text: {
        fontSize: 24,
        textAlign: 'center',
    }

})

function mapStateToProps(storeState) {

    return {
        storeState,
    }
}

function mapDispatchToProps(dispatch) {

    return {

        dispatch,
    }
}

export default connect(mapStateToProps)(DeckComponent)