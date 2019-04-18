class LocationModel {
    constructor(latitude, longitude, name, country, meta) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.country = country;
        this.meta = meta;
    }

    get isCurrent () {
        return Boolean(this.meta.current);
    }

    get hashCode() {
        return `${this.latitude}${this.longitude}`;
    }

    get fullName() {
        if (this.country) {
            return `${this.name}, ${this.country}`
        }
        return this.name;
    }

    get position() {
        return { lon: this.longitude, lat: this.latitude}
    }
}

export {LocationModel}