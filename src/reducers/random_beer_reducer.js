import {
    GET_RANDOM_BEER_SUCCESS,
    GET_RANDOM_BEER_PENDING,
    GET_RANDOM_BEER_ERROR
} from '../actions/types';

const intialState = {
    isPending:false,
    ranBeer: []
}


export default function(state = intialState, action){

            switch(action.type){

                case GET_RANDOM_BEER_PENDING:
                    return {...state, isPending: true}
                case GET_RANDOM_BEER_SUCCESS:
                    return {...state, isPending: false, ranBeer:action.payload}
                case GET_RANDOM_BEER_ERROR:
                    return {...state, isPending: false, error:action.payload}

                    default:
                        return state
            }   

}