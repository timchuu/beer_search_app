import { combineReducers } from 'redux';
import beer from './beer_reducer';
import randomBeer from './random_beer_reducer';
import randomBrewery from './random_brewery_reducer';
const rootReducer = combineReducers({
    beer,
    randomBeer,
    randomBrewery
});

export default rootReducer;