import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'


class HomeView extends React.Component {

    render() {

        let { navigateToDeck } = this.props.route.params

        let {decks, cards} = this.props.storeState

        console.log(decks)

        return <View>

            <Text>This is Home Screen</Text>

            <Text>{JSON.stringify(decks)}</Text>

            {/* <Button onPress={() => navigation.navigate('Details')} title={'Go To Settings'} /> */}


            <FlatList data={decks} renderItem={({ item }) => (<Deck_Item item={item} navigateToDeck={navigateToDeck} />)} style={styles.DeckList} />



        </View>

    }

}

const Deck_Item = (props) => {


    let { item, navigateToDeck } = props

    return <TouchableOpacity key={item.id} style={styles.Deck_Item} onPress={navigateToDeck}>

        <Text>{item.title}</Text>

    </TouchableOpacity>

}

const styles = StyleSheet.create({
    DeckList: {


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

mapStateToProps = (storeState) => {

    return {
        storeState
    }
}

export default connect(mapStateToProps)(HomeView)