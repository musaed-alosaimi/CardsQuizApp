import {SHOW_CARDS_ACTION, ADD_CARD_ACTION, DELETE_CARD_ACTION} from '../actions/ActionConstatns'

export function CardsReducer(state = [], action){

    if(action.type === SHOW_CARDS_ACTION){

        return {...state, ...action.cards}

    }else if(action.type === ADD_CARD_ACTION){

        return {...state, [action.newCard.id]: action.newCard}

    }else if(action.type === DELETE_CARD_ACTION){


    }else{

        return state

    }



}