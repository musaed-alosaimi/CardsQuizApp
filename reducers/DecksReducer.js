import {SHOW_DECKS_ACTION, ADD_DECK_ACTION, DELETE_DECK_ACTION} from '../actions/ActionConstatns'

export function DecksReducer(state = [], action){

    if(action.type === SHOW_DECKS_ACTION){

        return {...state, ...action.decks}

    }else if(action.type === ADD_DECK_ACTION){

        let newState = state

        newState = {...state, [action.newDeck.id]: action.newDeck}

        return newState

    }else if(action.type === DELETE_DECK_ACTION){

    }else{

        return state

    }



}