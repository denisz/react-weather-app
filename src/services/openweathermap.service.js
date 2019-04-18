import { config } from '../config';

class OpenweathermapService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    findLocationWithQuery(q) {
        return this.httpClient({
            baseURL: config.OPWS_API_URL,
            method: "get",
            url: "/find",
            params: { q, appid: config.OPWS_API_KEY }
        })
    }

    fetchWeatherWithLatLon(lat, lon) {
        return this.httpClient({
            baseURL: config.OPWS_API_URL,
            method: "get",
            url: "/weather",
            params: { lat, lon, appid: config.OPWS_API_KEY }
        });
    }

    fetchFiveDayForecast(lat, lon) {
        return this.httpClient({
            baseURL: config.OPWS_API_URL,
            method: "get",
            url: "/forecast/daily",
            params: { lat, lon, cnt: 5, appid: config.OPWS_API_KEY }
        })
    }
}

export { OpenweathermapService }