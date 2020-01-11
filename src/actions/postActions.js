import {GET_LISTINGS, NEW_LISTING} from './types';


export function newProperty(formdata){
    return function(dispatch){
        dispatch({
            type: NEW_LISTING,
            payload: formdata
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



