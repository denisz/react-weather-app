import { fromJS } from 'immutable';

import {
    CURRENT_LOCATION_FAILED,
    CURRENT_LOCATION_SUCCEEDED,
    CURRENT_LOCATION_REQUESTED,
} from '../constants';

const initialState = fromJS({
    loading: false,
    error: false,
    location: null,
    forecast: null,
    weather: null,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_LOCATION_REQUESTED:
            return state
                    .set('loading', true)
                    .set('error', false);
        case CURRENT_LOCATION_SUCCEEDED:
            return state
                .set('loading', false)
                .set('location', action.location);
        case CURRENT_LOCATION_FAILED:
            return state
                    .set('error', action.message)
                    .set('loading', false);
        default:
            return state;
    }
}


