import { combineReducers } from 'redux';
import beer from './beer_reducer';

const rootReducer = combineReducers({
    beer
});

export default rootReducer;