import { LocationModel } from "../models/location.model";
import {createLocationModelFromObject} from "../models/extensions";

const LOCATION_STORAGE_KEY = "location_storage_key";

class LocationsService {
    constructor(storageService) {
        this.storageService = storageService;
    }

    async loadFromStorage() {
        try {
            const json = await this.storageService.getItem(LOCATION_STORAGE_KEY);

            if (json) {
                const locations = JSON.parse(json).map( i => createLocationModelFromObject(i));
                return Promise.resolve(locations);
            }

            return Promise.resolve([]);
        } catch(e) {
            return Promise.reject(e);
        }
    }

    async saveToStorage(locations) {
        const json = JSON.stringify(locations);
        return this.storageService.setItem(LOCATION_STORAGE_KEY, json);
    }

    async appendLocation(location, first = false) {
        if (!(location instanceof LocationModel)) {
            return Promise.reject(new TypeError("invalid location"));
        }

        const local = await this.loadFromStorage();
        const isExists = local.some( l => l.hashCode === location.hashCode );
        if (isExists) {
            throw new Error('Duplicate location not allowed')
        }

        const newValue = first ? [location, ...local] : [...local, location];
        await this.saveToStorage(newValue);
        return Promise.resolve(newValue);
    }

    async removeLocation(location) {
        if (!(location instanceof LocationModel)) {
            throw new TypeError("invalid location")
        }

        const local = await this.loadFromStorage();
        const index = local
            .findIndex( l => l.hashCode === location.hashCode);

        if (index > -1) {
            local.splice(index, 1);
            await this.saveToStorage(local);
        }

        return Promise.resolve(local)
    }
}


export { LocationsService }