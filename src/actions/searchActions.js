import axios from 'axios';
import {
    BEER_SEARCH,
    GET_RANDOM_BEER_SUCCESS,
    GET_RANDOM_BEER_PENDING,
    GET_RANDOM_BEER_ERROR,
    GET_RANDOM_BREWERY_SUCCESS,
    GET_RANDOM_BREWERY_PENDING,
    GET_RANDOM_BREWERY_ERROR
} from './types';


export function getBeer(){

    const request = axios.get('https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers?key=7cd58050cdbe2bea891521aaec888692')
                                    .then(response => response.data)
                                    
                                    
        
            return {
                type: BEER_SEARCH,
                payload: request
            }

}



export function getRandomBeer(){

        return dispatch => {
            dispatch({ type: GET_RANDOM_BEER_PENDING});
                axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers?order=random&randomCount=10&hasLabels=Y&key=7cd58050cdbe2bea891521aaec888692`)
                                                                .then(response => dispatch({type: GET_RANDOM_BEER_SUCCESS, payload: response.data}))
                                                                        .catch(error => dispatch({type: GET_RANDOM_BEER_ERROR, payload: error}))
        }
                                                                      
                                 
}


export function getRandomBrewery(){

        return dispatch =>{
            dispatch({type: GET_RANDOM_BREWERY_PENDING });
                axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/breweries?order=random&randomCount=10&hasImages=Y&key=7cd58050cdbe2bea891521aaec888692`) 
                                                                .then(response => dispatch({type: GET_RANDOM_BREWERY_SUCCESS, payload: response.data}))
                                                                        .catch(error => dispatch({type: GET_RANDOM_BREWERY_ERROR, payload: error}))


        }
      
                                    

                                    


                         
    

}



