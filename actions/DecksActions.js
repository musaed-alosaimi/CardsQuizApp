import {RETRIEVE_DECKS_ACTION, ADD_DECK_ACTION, DELETE_DECK_ACTION} from './ActionConstatns'


export function RetrieveDecks(decks){

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

export function DeleteDeck(id){

    return {
        type: DELETE_DECK_ACTION,
        id
    }


}