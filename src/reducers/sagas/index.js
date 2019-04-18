import { userLocationSaga } from "./current-location.saga";
import {
    findLocationSaga
} from "./find-location.saga";
import {
    UpdateWeatherSaga,
    AddNewLocationsSaga,
    RemoveLocationsSaga,
    AddCurrentLocation
} from "./locations.saga";

export default [
    userLocationSaga,
    findLocationSaga,
    AddNewLocationsSaga,
    RemoveLocationsSaga,
    UpdateWeatherSaga,
    AddCurrentLocation
];