import axios from 'axios';
import {
    GET_SINGLE_BREW_SUCCESS,
    GET_SINGLE_BREW_PENDING,
    GET_SINGLE_BREW_ERROR,
    GET_SINGLE_BREW_CLEAR
} from './types';




export function getSingleBrew(id){

    return dispatch => {
        dispatch({type: GET_SINGLE_BREW_PENDING})
            axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/brewery/${id}?key=7cd58050cdbe2bea891521aaec888692&withLocations=Y&withSocialAccounts=Y`)
                                                    .then(response => dispatch({type: GET_SINGLE_BREW_SUCCESS, payload: response.data}))
                                                            .catch(error => dispatch({type:GET_SINGLE_BREW_ERROR, payload: error}))
    }

}



export function getSingleBrewClear(){


    return {
        type: GET_SINGLE_BREW_CLEAR,
        payload: null
    }
}


