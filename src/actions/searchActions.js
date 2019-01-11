import axios from 'axios';
import {
    BEER_SEARCH
} from './types';


export function getBeer(){
    const request = axios.get('https://jsonplaceholder.typicode.com/posts')
                                    .then(response => response.data)
                                    
                                    
        
            return {
                type: BEER_SEARCH,
                payload: request
            }

}



