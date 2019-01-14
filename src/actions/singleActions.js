import axios from 'axios';
import {
    GET_SINGLE_BEER_SUCCESS,
    GET_SINGLE_BEER_PENDING,
    GET_SINGLE_BEER_ERROR
} from './types';




export function getSingleBeer(id){
        
        return dispatch => {
                dispatch({type: GET_SINGLE_BEER_PENDING})
            axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/${id}?key=7cd58050cdbe2bea891521aaec888692`)
                                                .then(response => dispatch({type: GET_SINGLE_BEER_SUCCESS, payload: response.data }))
                                                    .catch(error => dispatch({type: GET_SINGLE_BEER_ERROR, payload: error}))
        }



}