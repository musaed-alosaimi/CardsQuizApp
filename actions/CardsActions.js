import {ADD_CARD_ACTION, RETRIEVE_CARDS_ACTION, DELETE_DECK_ACTION} from './ActionConstatns'

export function RetrieveCards(cards){

    return {
        type: RETRIEVE_CARDS_ACTION,
        cards
    }
    
}

export function AddCard(newCard){

    return {
        type: ADD_CARD_ACTION,
        newCard
    }

}

export function DeleteCard(id){

    return {
        type: DELETE_CARD_ACTION,
        id
    }


}