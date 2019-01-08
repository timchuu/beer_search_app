import {
    BEER_SEARCH
} from '../actions/types';

    const initialState ={
        results: []
    }

export default function(state = initialState, action){
        switch(action.type) {
            case BEER_SEARCH:
                    return {...state, beers: action.payload}
            
                    default:
                        return state;





        }

}