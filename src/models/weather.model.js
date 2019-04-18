class WeatherModel {
    constructor(dt, coord, temp, pressure, humidity, weather, speed, deg, clouds, rain, sys) {
        this.dt = dt;
        this.coord = coord;
        this.temp = temp;
        this.pressure = pressure;
        this.humidity = humidity;
        this.weather = weather;
        this.speed = speed;
        this.deg = deg;
        this.clouds = clouds;
        this.rain = rain;
        this.sys = sys;
    }

    get iconCode() {
        return this.weather.id;
    }

    get condition() {
        return this.weather.description;
    }

    get tempToday() {
        return this.temp.temp;
    }

    get timestamp() {
        return new Date(this.dt * 1000)
    }
}

export {WeatherModel}