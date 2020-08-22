import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

function DeckItem(props) {

    let { item, navigateToDeck } = props

    let { decks, cards } = props.storeState

    if(decks[item] === undefined)
    return <View></View>

    return <TouchableOpacity key={decks[item]} style={styles.Deck_Item} onPress={() => navigateToDeck(item)} >

        <Text>{decks[item].title}</Text>

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
    }

})


function mapStateToProps(storeState) {

    return {
        storeState
    }
}

export default connect(mapStateToProps)(DeckItem)