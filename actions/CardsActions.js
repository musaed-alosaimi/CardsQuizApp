import {ADD_CARD_ACTION, SHOW_CARDS_ACTION, DELETE_DECK_ACTION} from './ActionConstatns'

export function ShowCards(cards){

    return {
        type: SHOW_CARDS_ACTION,
        cards
    }
    
}

export function AddCard(card){

    return {
        type: ADD_CARD_ACTION,
        card
    }

}

export function DeleteCard(card){

    return {
        type: DELETE_CARD_ACTION,
        id
    }


}