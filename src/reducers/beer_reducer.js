import {
    BEER_SEARCH_SUCCESS,
    BEER_SEARCH_ERROR,
    BEER_SEARCH_PENDING,
    BEER_SEARCH_CLEAR
} from '../actions/types';



const intialState ={
    beers: [],
    isPending: false   
}

export default function(state = intialState, action){
        switch(action.type) {
            case BEER_SEARCH_SUCCESS:
                    return {...state, isPending: false, beers: action.payload}
            case BEER_SEARCH_PENDING:
                    return {...state, isPending:true}
            case BEER_SEARCH_ERROR:
                    return {...state, isPending: false, error: action.payload}
                    default:
                        return state;

            case BEER_SEARCH_CLEAR:
                    return {...state, beers: action.payload}



        }

}

