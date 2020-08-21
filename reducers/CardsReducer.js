import {RETRIEVE_CARDS_ACTION, ADD_CARD_ACTION, DELETE_CARD_ACTION} from '../actions/ActionConstatns'

export function CardsReducer(state = [], action){

    let newState = {...state}

    if(action.type === RETRIEVE_CARDS_ACTION){

        newState = {...state, ...action.cards}

        return newState

    }else if(action.type === ADD_CARD_ACTION){

        newState = {...state, [action.newCard.id]: action.newCard}

        return newState

    }else if(action.type === DELETE_CARD_ACTION){


    }else{

        return newState

    }



}