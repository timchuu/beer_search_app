import { combineReducers } from 'redux';
import beer from './beer_reducer';
import randomBeer from './random_beer_reducer';
import randomBrewery from './random_brewery_reducer';
import singleReducer from './single_reducer';
import singleBrewReducer from './single_brew_reducer'
const rootReducer = combineReducers({
    beer,
    randomBeer,
    randomBrewery,
    singleReducer,
    singleBrewReducer
});

export default rootReducer;