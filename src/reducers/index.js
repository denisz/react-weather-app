import { combineReducers } from 'redux';
import CurrentLocationReducer from './modules/current-location.reducer';
import FindLocationReducer from './modules/find-location.reducer';
import LocationsReducer from './modules/locations.reducer';

export default combineReducers({
    currentLocation: CurrentLocationReducer,
    findLocation: FindLocationReducer,
    locations: LocationsReducer,
});