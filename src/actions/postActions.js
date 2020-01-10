import {GET_LISTINGS, NEW_PROPERTY} from './types';


export function newProperty(form){
    return function(dispatch){
        dispatch({
            type: NEW_PROPERTY,
            payload: form
        })
    }
}

export function getListings(form){
    return function(dispatch){
        dispatch({
            type: GET_LISTINGS,
        })
    }
}



