import { combineReducers } from 'redux';
import { cityReducer, selectCity } from './cityReducer';
import { hourlyReducer, selectHourly } from './hourlyReducer';

export { selectHourly, selectCity };

export default combineReducers({
    cityReducer,
    hourlyReducer
})