import { OpenweathermapService } from "./openweathermap.service";
import { httpClient } from './http-client.service';

const testHttpClient = httpClient.create();

it('fetch weather with coordinates', async () => {
    const opws = new OpenweathermapService(testHttpClient);
    const location = await opws.fetchWeatherWithLatLon(35, 139);
    expect(location.data.cod).toBe(200);
});


it('find location', async () => {
    const opws = new OpenweathermapService(testHttpClient);
    const weather = await opws.findLocationWithQuery("London");
    expect(weather.data.cod).toBe("200");
});





