import { fromJS } from 'immutable';
import {
    FETCH_LIST_LOCATIONS_SUCCEEDED
} from "../constants";

const initialState = fromJS({
    collection: [],
});

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LIST_LOCATIONS_SUCCEEDED:
            return state.set('collection', action.collection);
        default:
            return state;
    }
}