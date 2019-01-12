import {
    BEER_SEARCH,
    RANDOM_BEER,
    RANDOM_BREWERY
} from '../actions/types';


const intialState ={
    beers: [],
    ranBeer: [],
    ranBrewery: []
}

export default function(state = intialState, action){
        switch(action.type) {
            case BEER_SEARCH:
                    return {...state, beers: action.payload}
            case RANDOM_BEER: 
                    return {...state, ranBeer: [action.payload]}
            case RANDOM_BREWERY: 
                    return {...state, ranBrewery:action.payload}
                    default:
                        return state;

            



        }

}