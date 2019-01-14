import {
    BEER_SEARCH
    
} from '../actions/types';


const intialState ={
    beers: []   
}

export default function(state = intialState, action){
        switch(action.type) {
            case BEER_SEARCH:
                    return {...state, beers: action.payload}
                    default:
                        return state;

            



        }

}

