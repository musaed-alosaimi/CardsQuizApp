import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailsComponent from './DetailsComponent'
import DeckComponent from './DeckComponent'
import { connect } from 'react-redux'


const Stack = createStackNavigator();

class HomeComponent extends React.Component {

    render() {

        let { navigation } = this.props

        const navigateToDeck = () => {

            navigation.navigate('Deck', { title: 'Settings' });

        }

        return <View style={styles.container}>

            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeView} initialParams={{ navigateToDeck, decks: this.props.storeState.decks }} />
                <Stack.Screen name="Deck" component={DeckComponent} />

            </Stack.Navigator>



            {/* <Stack.Navigator initialRouteName="Home" headerMode="screen" screenOptions={{
        header: ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return ( 
    <View style={{height: 100, backgroundColor: '#CCC',}}>
      <Text>{title}</Text> 
      
      
        {previous ? <Button onPress={navigation.goBack} style={{backgroundColor: 'red',color: 'black'}} title={'Back'} /> : undefined}
      
    
    </View>
  );
},
}}>
        <Stack.Screen name="AddDeckComponent" component={AddDeckComponent} />
        <Stack.Screen name="Details" component={DetailsComponent} />
      </Stack.Navigator> */}


        </View>

    }

}


const Deck_Item = (props) => {


    let { item, navigateToDeck } = props

    return <TouchableOpacity key={item.id} style={styles.Deck_Item} onPress={navigateToDeck}>

        <Text>{item.title}</Text>

    </TouchableOpacity>

}

class HomeView extends React.Component {

    render() {

        let { navigateToDeck, decks } = this.props.route.params

        return <View>

            <Text>This is Home Screen</Text>

            <Text>{JSON.stringify(decks)}</Text>

            {/* <Button onPress={() => navigation.navigate('Details')} title={'Go To Settings'} /> */}


            <FlatList data={decks} renderItem={({ item }) => (<Deck_Item item={item} navigateToDeck={navigateToDeck} />)} style={styles.DeckList} />



        </View>

    }

}

const styles = StyleSheet.create({

    container: {

        fontSize: 24,
        flex: 1,


    },

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

function mapStateToProps(storeState) {

    return {
        storeState
    }

}

export default connect(mapStateToProps)(HomeComponent)