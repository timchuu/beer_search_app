import axios from 'axios';
import {
    BEER_SEARCH_PENDING,
    BEER_SEARCH_SUCCESS,
    BEER_SEARCH_ERROR,
    GET_RANDOM_BEER_SUCCESS,
    GET_RANDOM_BEER_PENDING,
    GET_RANDOM_BEER_ERROR,
    GET_RANDOM_BREWERY_SUCCESS,
    GET_RANDOM_BREWERY_PENDING,
    GET_RANDOM_BREWERY_ERROR,
    GET_RANDOM_BEER_CLEAR,
    GET_RANDOM_BREWERY_CLEAR,
    BEER_SEARCH_CLEAR

} from './types';


export function getBeer(searchTerm){
        //let searchTerm = new RegExp(wordsToMatch, 'gi')
    return dispatch => {
        dispatch({type: BEER_SEARCH_PENDING});
                axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/search?q=${searchTerm}&key=7cd58050cdbe2bea891521aaec888692`)
                                        .then(response => dispatch({type: BEER_SEARCH_SUCCESS, payload: response.data}))
                                                    .catch(error => dispatch({type: BEER_SEARCH_ERROR, payload: error }))

    }                       

                                   
                                    

}



export function getRandomBeer(){

        return dispatch => {
            dispatch({ type: GET_RANDOM_BEER_PENDING});
                axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers?order=random&randomCount=3&hasLabels=Y&key=7cd58050cdbe2bea891521aaec888692`)
                                                                .then(response => dispatch({type: GET_RANDOM_BEER_SUCCESS, payload: response.data}))
                                                                        .catch(error => dispatch({type: GET_RANDOM_BEER_ERROR, payload: error}))
        }
                                                                      
                                 
}


export function getRandomBrewery(){

        return dispatch =>{
            dispatch({type: GET_RANDOM_BREWERY_PENDING });
                axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/breweries?order=random&randomCount=3&hasImages=Y&key=7cd58050cdbe2bea891521aaec888692`) 
                                                                .then(response => dispatch({type: GET_RANDOM_BREWERY_SUCCESS, payload: response.data}))
                                                                        .catch(error => dispatch({type: GET_RANDOM_BREWERY_ERROR, payload: error}))


        }
      
                                    

                                    


                         
    

}


export function getRandomBeerClear(){

    return {
        type: GET_RANDOM_BEER_CLEAR,
        payload: null
    }
}

export function getRandomBreweryClear(){

    return {
        type: GET_RANDOM_BREWERY_CLEAR,
        payload: null
    }
}

export function getBeerClear(){

    return {
        type: BEER_SEARCH_CLEAR,
        payload: null
    }
}


