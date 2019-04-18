class WeeklyForecastModel {
    constructor(forecast = []) {
        this.forecast = forecast;
    }

    getDays() {
        return this.forecast;
    }
}

export { WeeklyForecastModel }

