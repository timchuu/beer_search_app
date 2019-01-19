import {
    GET_RANDOM_BREWERY_SUCCESS,
    GET_RANDOM_BREWERY_PENDING,
    GET_RANDOM_BREWERY_ERROR,
    GET_RANDOM_BREWERY_CLEAR
} from '../actions/types';



const intialState ={
    isPending: false,
    ranBrewery: []
}


export default function(state = intialState, action){

        switch(action.type){
            case GET_RANDOM_BREWERY_PENDING: 
                return {...state, isPending:true}
            case GET_RANDOM_BREWERY_SUCCESS: 
                return {...state, isPending:false, ranBrewery: action.payload}
            case GET_RANDOM_BREWERY_ERROR: 
                return {...state, isPending:false, error: action.payload}
            case GET_RANDOM_BREWERY_CLEAR: 
                return {...state, ranBrewery: action.payload}
                    default:
                        return state
        }
}