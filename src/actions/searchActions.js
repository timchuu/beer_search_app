import axios from 'axios';
import {
    BEER_SEARCH,
    RANDOM_BEER,
    RANDOM_BREWERY
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

    const request = axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random?key=7cd58050cdbe2bea891521aaec888692&hasLabels`)   
                                    .then(response => response.data)

                                    


          return {
              type: RANDOM_BEER,
              payload: request
          }                         
}


export function getRandomBrewery(){

    const request = axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/brewery/random?key=7cd58050cdbe2bea891521aaec888692`)   
                                    .then(response => response.data)

                                    


          return {
              type: RANDOM_BREWERY,
              payload: request
          }                       
    

}



