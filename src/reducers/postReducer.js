import {NEW_LISTING, GET_LISTINGS} from '../actions/types';

const initialState={
    properties: [
        {
            propertyName: 'The boogaloo',
            footage: '3500 sqft',
            address: '123 hill bounty rd',
            price:'$ 350,000.00'
        },

    ],
    newListing: {}
}

export default function(state=initialState, action){
    switch(action.type){
       
        case NEW_LISTING:
            return{
                ...state,
                newListing:action.payload
            }
        case GET_LISTINGS:
            return{
                state
            }
        
        default:
            return state
    }
}