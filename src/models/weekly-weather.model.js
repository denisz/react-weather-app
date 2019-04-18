class WeeklyWeatherModel {
    constructor(dt, temp, pressure, humidity, weather, speed, deg, clouds, rain, sys) {
        this.dt = dt;
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

    get timestamp() {
        return new Date(this.dt * 1000)
    }

    get tempToday() {
        return this.temp.min;
    }

    get tempDay() {
        return this.temp.day;
    }

    get tempNight() {
        return this.temp.night;
    }
}

export { WeeklyWeatherModel }