import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'

class HomeView extends React.Component {

    navigateToDeck = (item_id) => {

        this.props.navigation.navigate('Deck', { item_id });

    }

    render() {

        let { decks, cards } = this.props.storeState

        return <View style={{ flex: 1, padding: 25, }}>

            {Object.keys(decks).length === 0 && <Text style={{fontSize: 24, textAlign: 'center', marginTop: 30, }}>There is no decks.</Text>}

            {/* {JSON.stringify(decks)} */}

            {/* <Button onPress={() => navigation.navigate('Details')} title={'Go To Settings'} /> */}


            <FlatList data={Object.keys(decks)} keyExtractor={(item) => item} renderItem={({ item }) => (<DeckItem key={item} item={item} navigateToDeck={this.navigateToDeck} />)} style={styles.DeckList} />



        </View>

    }

}

const styles = StyleSheet.create({
    DeckList: {

        flex: 1,

    },

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

export default connect(mapStateToProps, null)(HomeView)