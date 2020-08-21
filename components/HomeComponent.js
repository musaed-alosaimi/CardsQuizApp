import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailsComponent from './DetailsComponent'
import DeckComponent from './DeckComponent'
import { connect } from 'react-redux'
import HomeView from '../views/HomeView'


const Stack = createStackNavigator();

class HomeComponent extends React.Component {

    componentDidMount(){

    }

    render() {

        let { navigation } = this.props

        const navigateToDeck = () => {

            navigation.navigate('Deck', { title: 'Settings' });

        }

        console.log(this.props.storeState.decks)

        return <View style={styles.container}>


            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeView} initialParams={{ navigateToDeck }} />
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