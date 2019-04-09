import config from '../config';

//Сервис работы с api
class OpenweathermapService {
    constructor(httpClient) {
        this.httpClient = httpClient;

        this.instance = httpClient.create({
            baseURL: config.API_URL,
            timeout: 1000,
            // appid=${API_KEY}
            headers: {'X-Custom-Header': 'foobar'}
        });
    }

    findLocation(query) {

    }

    async fetchWeatherWithLatLon(lat, lon) {
        return axios.get()
    }
}


export { OpenweathermapService }