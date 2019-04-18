import {
    CURRENT_LOCATION_FAILED,
    CURRENT_LOCATION_REQUESTED,
    CURRENT_LOCATION_SUCCEEDED,

    FETCH_LIST_LOCATIONS_SUCCEEDED,

    FIND_LOCATION_FAILED,
    FIND_LOCATION_QUERY_CHANGED,
    FIND_LOCATION_REQUESTED,
    FIND_LOCATION_SUCCEEDED,
    LIST_LOCATION_ADD,
    LIST_LOCATION_REMOVE, LIST_LOCATION_UPDATE,

} from "./constants";

export function changeCurrentLocation(location) {
    return {type: CURRENT_LOCATION_SUCCEEDED, location };
}

export function fetchCurrentLocationError(e) {
    return {type: CURRENT_LOCATION_FAILED, message: e.message};
}

export function fetchCurrentLocation() {
    return { type: CURRENT_LOCATION_REQUESTED }
}

export function fetchFindLocationWithQuery(query) {
    return { type: FIND_LOCATION_REQUESTED, query };
}

export function changeFindLocation(collection) {
    return { type: FIND_LOCATION_SUCCEEDED, collection };
}

export function fetchFindLocationWithError(e) {
    return { type: FIND_LOCATION_FAILED, message: e.message };
}

export function filterFindLocationWithQuery(query) {
    return { type: FIND_LOCATION_QUERY_CHANGED, query };
}

export function updateWeather() {
    return { type: LIST_LOCATION_UPDATE }
}

export function addNewLocation(location) {
    return { type: LIST_LOCATION_ADD, location}
}

export function removeLocation(location) {
    return { type: LIST_LOCATION_REMOVE, location}
}

export function changeListLocations(collection) {
    return { type: FETCH_LIST_LOCATIONS_SUCCEEDED, collection }
}

