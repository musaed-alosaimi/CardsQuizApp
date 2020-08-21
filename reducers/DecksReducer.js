import {RETRIEVE_DECKS_ACTION, ADD_DECK_ACTION, DELETE_DECK_ACTION} from '../actions/ActionConstatns'

export function DecksReducer(state = {}, action){

    let newState = {...state}

    if(action.type === RETRIEVE_DECKS_ACTION){

        newState = {...state,  ...action.decks}

    }else if(action.type === ADD_DECK_ACTION){

        newState = {...state,  [action.newDeck.id]: action.newDeck}

    }else if(action.type === DELETE_DECK_ACTION){


    }
    
    return newState




}