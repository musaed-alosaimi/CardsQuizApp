import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


function cardsNumber(cards, item) {

    let count = 0

    Object.keys(cards).map((key) => {

        let card = cards[key]

        if (card.deck_id === item) {

            count++

        }

    })

    return count

}

function DeckItem(props) {

    let { item, navigateToDeck } = props

    let { decks, cards } = props.storeState

    if (decks[item] === undefined)
        return <View></View>

    return <TouchableOpacity key={decks[item]} style={styles.Deck_Item} onPress={() => navigateToDeck(item)} >

        <Text style={styles.Deck_Item_Text}>{decks[item].title}</Text>

        <Text style={styles.Deck_Item_Text}>{cardsNumber(cards, item)} cards</Text>

    </TouchableOpacity>

}

const styles = StyleSheet.create({

    Deck_Item: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#AAA',
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
    },

    Deck_Item_Text: {
        fontSize: 18,
        
    }

})


function mapStateToProps(storeState) {

    return {
        storeState
    }
}

export default connect(mapStateToProps)(DeckItem)