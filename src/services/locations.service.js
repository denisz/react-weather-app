import { LocationModel } from "../models/location.model";

const LOCATION_STORAGE_KEY = "location_storage_key";

class LocationsService {
    constructor(storageService) {
        this.storageService = storageService;
    }

    marshal() {

    }

    unmarshal(jsonToken) {

    }

    async loadFromStorage() {

        try {
            const token = await this.storageService.getItem(LOCATION_STORAGE_KEY);
            this.locations = JSON.parse(token);
        } catch(e) {
            throw e;
        }
    }

    async saveToStorage() {
        return this.storageService.setItem(LOCATION_STORAGE_KEY, this.marshal());
    }

    addLocation(location) {
        if (!(location instanceof LocationModel)) {
            throw new TypeError("invalid location")
        }
        this.locations = [...this.locations, location];
    }

    deleteLocation(location) {

    }

    fetchAllLocation() {

    }
}


export { LocationsService }