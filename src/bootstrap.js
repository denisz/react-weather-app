import { httpClient } from "./services/http-client.service";
import { OpenweathermapService } from "./services/openweathermap.service";
import { LocalStorageService } from "./services/local-storage.service";
import { LocationsService } from "./services/locations.service";
import {CurrentPositionService} from "./services/current-position.service";
import {NotifyService} from "./services/notify.service";

export default () => {
    const instances = new WeakMap();

    instances.set(httpClient, httpClient);
    instances.set(LocalStorageService, new LocalStorageService());
    instances.set(OpenweathermapService, new OpenweathermapService(instances.get(httpClient)));
    instances.set(LocationsService, new LocationsService(instances.get(LocalStorageService)));
    instances.set(CurrentPositionService, new CurrentPositionService());
    instances.set(NotifyService, new NotifyService());
    return instances;
}