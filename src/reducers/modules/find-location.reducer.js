import { fromJS } from 'immutable';

import {
    FIND_LOCATION_FAILED,
    FIND_LOCATION_SUCCEEDED,
    FIND_LOCATION_REQUESTED, FIND_LOCATION_QUERY_CHANGED,
} from '../constants';

// The initial state of the App
const initialState = fromJS({
    loading: false,
    error: false,
    query: '',
    collection: [],
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FIND_LOCATION_REQUESTED:
            return state
                .set('loading', true)
                .set('error', false);
        case FIND_LOCATION_SUCCEEDED:
            return state
                .set('loading', false)
                .set('collection', action.collection);
        case FIND_LOCATION_FAILED:
            return state
                .set('error', action.message)
                .set('loading', false);
        case FIND_LOCATION_QUERY_CHANGED:
            return state
                .set('query', action.query);
        default:
            return state;
    }
}


