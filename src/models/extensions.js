import {WeeklyWeatherModel} from "./weekly-weather.model";
import {WeeklyForecastModel} from "./weekly-forecast.model";
import {LocationModel} from "./location.model";
import {WeatherModel} from "./weather.model";

export const createLocationModelFromNavigator = (position, meta = {}) => {
    const { coords } = position;
    const { latitude, longitude } = coords;
    return new LocationModel(latitude, longitude, "Current Location", null, meta);
};

export const createLocationModelFromOWM = (locationFromOWM) => {
    const country = locationFromOWM.sys.country;
    const { name, coord:{ lat, lon }} = locationFromOWM;
    return new LocationModel(lat, lon, name, country, {});
};

export const createWeeklyWeatherModelFromOWM = (weatherFormOWM) => {
    let { dt, temp, pressure, humidity, weather: [weather], speed, deg, clouds, rain, sys } = weatherFormOWM;
    return new WeeklyWeatherModel(dt, temp, pressure, humidity, weather, speed, deg, clouds, rain, sys);
};

export const createWeatherModelFromOWM = (weatherFormOWM) => {
    let {dt, coord, main: {humidity, temp, pressure, temp_min, temp_max}, weather: [weather], clouds, wind: {speed, deg}, rain, sys} = weatherFormOWM;
    return new WeatherModel(dt, coord, { temp, min: temp_min, max: temp_max}, pressure, humidity, weather, speed, deg, clouds, rain, sys)
};

export const createWeeklyForecastModelFromOWM = (forecastFromOWM) => {
    const forecast = forecastFromOWM.list
        .map((item) => createWeeklyWeatherModelFromOWM(item));
    return new WeeklyForecastModel(forecast);
};

export const createLocationModelFromObject = (source) => {
    return Object.assign(new LocationModel(), source);
};
