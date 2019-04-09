import { call } from 'redux-saga/effects';

export const CURRENT_LOCATION_FETCH_SUCCESS = "current_location_fetch_success";

const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error),
    )
});

async function myGenerator() {
    const location = yield call(getUserLocation);
    {latitude, longitude} = location.coords;
}


export const currentLocationFetch = (baseURL, type, units, API_KEY) => {
    return (dispatch) => {
        console.log('TYPE: ' + type);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const requestURL = `${baseURL}${type}?units=${units}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`;
                //this.prepareURL(baseURL, position.coords.latitude, position.coords.longitude, 'weather');

                axios.get(requestURL)
                    .then((response) => {
                        dispatch({ type: CURRENT_LOCATION_FETCH_SUCCESS, payload: response.data });
                        //self.parseResponse(response.data);
                        //console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            (error) => dispatch({ type: 'error', error: error.message }),
            {
                enableHighAccuracy: false,
                timeout: 20000,
                maximumAge: 1000
            },
        );
    };
};