import {NEW_PROPERTY, GET_LISTINGS} from '../actions/types';

const initialState={
    properties: [],
    newListing: {}
}

export default function(state=initialState, action){
    switch(action.type){
       
        case NEW_PROPERTY:
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