import {RETRIEVE_DECKS_ACTION, ADD_DECK_ACTION, DELETE_DECK_ACTION} from './ActionConstatns'


export function ShowDecks(decks){

    return {
        type: RETRIEVE_DECKS_ACTION,
        decks
    }


}

export function AddDeck(newDeck){

    return {
        type: ADD_DECK_ACTION,
        newDeck
    }


}

export function DeleteDeck(decks){

    return {
        type: DELETE_DECK_ACTION,
        id
    }


}