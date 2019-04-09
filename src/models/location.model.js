class LocationModel {
    constructor(latitude, longitude, meta) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.meta = meta;
    }

    toJson() {
        let {latitude, longitude, meta} = this;
        return JSON.stringify({latitude, longitude, meta});
    }
}

LocationModel.fromJson = (jsonToken) => {
    const json = JSON.parse(jsonToken);
    return new LocationModel(json.latitude, json.longDesc, jons.meta);
};

export {LocationModel}