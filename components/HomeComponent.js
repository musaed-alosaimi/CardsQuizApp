import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailsComponent from './DetailsComponent'
import DeckComponent from './DeckComponent'
import { connect } from 'react-redux'
import HomeView from '../views/HomeView'
import AddCardComponent from './AddCardComponent'
import QuizComponent from './QuizComponent'
import ResultComponent from './ResultComponent'


const Stack = createStackNavigator();

class HomeComponent extends React.Component {

    componentDidMount(){

    }

    render() {

        let { navigation } = this.props

        return <View style={styles.container}>


            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeView}  />
                <Stack.Screen name="Deck" component={DeckComponent} />
                <Stack.Screen name="AddCard" component={AddCardComponent} />
                <Stack.Screen name="Quiz" component={QuizComponent} />
                <Stack.Screen name="QuizResult" component={ResultComponent} />

            </Stack.Navigator>


        </View>

    }

}



const styles = StyleSheet.create({

    container: {

        fontSize: 24,
        flex: 1,


    },

})

const mapStateToProps = (storeState) => {

    return {
        storeState
    }

}

export default connect(mapStateToProps)(HomeComponent)