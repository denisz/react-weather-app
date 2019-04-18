import {call, takeEvery, put} from 'redux-saga/effects';
import {FIND_LOCATION_REQUESTED} from "../constants";
import {OpenweathermapService} from "../../services/openweathermap.service";
import {
    changeFindLocation,
    fetchFindLocationWithError
} from "../actions";
import {createLocationModelFromOWM} from "../../models/extensions";


function* findLocationSaga(injector) {
    const service = injector.get(OpenweathermapService);

    yield takeEvery(FIND_LOCATION_REQUESTED, function* (action) {
        try {
            const respFindLocations = yield call(() => service.findLocationWithQuery(action.query));
            const {data} = respFindLocations;
            const list = data.list.map((i) => createLocationModelFromOWM(i));
            yield put(changeFindLocation(list));
        } catch (e) {
            console.log(e);
            yield put(fetchFindLocationWithError(e));
        }
    });
}

export {findLocationSaga}