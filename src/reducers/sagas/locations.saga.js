import { call, takeEvery, put, all } from 'redux-saga/effects';
import {OpenweathermapService} from "../../services/openweathermap.service";
import {
    CURRENT_LOCATION_SUCCEEDED,
    LIST_LOCATION_ADD,
    LIST_LOCATION_REMOVE,
    LIST_LOCATION_UPDATE
} from "../constants";
import {LocationsService} from "../../services/locations.service";
import { createWeatherModelFromOWM, createWeeklyForecastModelFromOWM } from "../../models/extensions";
import {changeListLocations, updateWeather} from "../actions";
import {NotifyService} from "../../services/notify.service";


const fetchFullDataLocation = weatherService => async location => {
    const { lat, lon } = location.position;

    const respWeather = await weatherService.fetchWeatherWithLatLon(lat, lon);
    const respWeeklyForecast = await weatherService.fetchFiveDayForecast(lat, lon);

    const weather = createWeatherModelFromOWM(respWeather.data);
    const forecast = createWeeklyForecastModelFromOWM(respWeeklyForecast.data);

    return { location, weather, forecast }
};


function* AddCurrentLocation(injector) {
    const locationsService = injector.get(LocationsService);
    const notifyService = injector.get(NotifyService);

    yield takeEvery(CURRENT_LOCATION_SUCCEEDED, function* (action) {
        try {
            yield call(() => locationsService.appendLocation(action.location, true));
            yield put(updateWeather());
            yield call(() => notifyService.send('Added new location'))
        } catch(e) {
            console.log(e);
        }
    })
}

function* AddNewLocationsSaga(injector) {
    const locationsService = injector.get(LocationsService);
    const notifyService = injector.get(NotifyService);

    yield takeEvery(LIST_LOCATION_ADD, function* (action) {
        try {
            yield call(() => locationsService.appendLocation(action.location));
            yield put(updateWeather());
            yield call(() => notifyService.send(`Added new location ${action.location.fullName}`))
        } catch(e) {
            console.log(e);
        }
    })
}

function* RemoveLocationsSaga(injector) {
    const locationsService = injector.get(LocationsService);
    const notifyService = injector.get(NotifyService);

    yield takeEvery(LIST_LOCATION_REMOVE, function* (action) {
        try {
            yield call(() => locationsService.removeLocation(action.location));
            yield put(updateWeather());
            yield call(() => notifyService.send(`Removed location ${action.location.fullName}`))
        } catch(e) {
            console.log(e);
        }
    })
}

function* UpdateWeatherSaga(injector) {
    const locationsService = injector.get(LocationsService);
    const weatherService = injector.get(OpenweathermapService);
    const fetch = fetchFullDataLocation(weatherService);

    yield takeEvery(LIST_LOCATION_UPDATE, function* () {
        try {
            const localLocations = yield call(() => locationsService.loadFromStorage());
            const collection = yield all(localLocations.map( l => call(fetch, l)));
            yield put(changeListLocations(collection));
        } catch (e) {
            console.log(e);
        }
    })
}

export {
    AddNewLocationsSaga,
    RemoveLocationsSaga,
    AddCurrentLocation,
    UpdateWeatherSaga
}