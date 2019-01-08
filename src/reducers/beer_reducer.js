import {
    BEER_SEARCH
} from '../actions/types';



export default function(state={}, action){


        switch(action.type) {

            case BEER_SEARCH:
                    return {...state}
            
                    default:
                        return state;





        }

}