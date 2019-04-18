import { call, takeEvery, put } from 'redux-saga/effects';
import {CURRENT_LOCATION_REQUESTED} from '../constants';
import {changeCurrentLocation, fetchCurrentLocationError} from "../actions";
import {CurrentPositionService} from "../../services/current-position.service";
import {createLocationModelFromNavigator} from '../../models/extensions';

function* userLocationSaga(injector) {
    const service = injector.get(CurrentPositionService);

    yield takeEvery(CURRENT_LOCATION_REQUESTED, function* () {
        try {
            const position = yield call(()=>service.getCurrentPosition());
            const currLocation = createLocationModelFromNavigator(position, {
                current: true
            });
            yield put(changeCurrentLocation(currLocation));
        } catch (e) {
            yield put(fetchCurrentLocationError(e));
        }
    });
}

export {userLocationSaga}