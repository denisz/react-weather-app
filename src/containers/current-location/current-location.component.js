import React from "react";
import {RequestPermissionComponent} from "../widget-weather/request-permission.component";
import {LoadingIndicatorComponent} from "../../shared/loading-indicator/loading-indicator.component";

const CurrentLocationComponent = ({onRequestCurrentLocation, loading}) => {
    return loading
        ? <LoadingIndicatorComponent/>
        : <RequestPermissionComponent onClick={onRequestCurrentLocation}/>
};

export {CurrentLocationComponent}