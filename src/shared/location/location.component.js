import React from "react";
import styled from "styled-components";
import {IconWeatherBigComponent, PACKAGE_NAME_OWM_DAY_NIGHT} from "../icon-weather/icon-weather.component";
import {DegreeComponent} from "../degree/degree.component";
import {WeeklyForecastComponent} from "./weekly-forecast.component";
import {
    SunriseComponent,
    SunsetComponent
} from "./param.component";

const Card = styled.div`    
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    height: 100%;
`;

const TitleLocation = styled.div`
    font-family: "Open Sans"; 
    font-size:30px;
    color: white;
    text-align: center;
    margin-bottom: 15px;
    cursor: pointer;
`;

const RowParams = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-around;
    margin-bottom: 15px;
`;

const Icon = styled(IconWeatherBigComponent)``;

const StyledWeeklyForecastComponent = styled(WeeklyForecastComponent)`
    align-self: stretch;
`;

const openMapHandle = (location) => {
    window.open(`https://maps.google.com/?q=${location.position.lat},${location.position.lon}`)
};

const LocationComponent = ({ className, weather, forecast, location, prefix="" }) => (
    <Card className={className}>
        <TitleLocation onClick={(()=>openMapHandle(location))}>{`${prefix} ${location.fullName}`}</TitleLocation>
        <Icon packageName={PACKAGE_NAME_OWM_DAY_NIGHT} icon={weather.iconCode}/>
        <DegreeComponent kelvin={weather.tempToday} withToggle/>
        <RowParams>
            <SunriseComponent value={weather.sunrise}/>
            <SunsetComponent value={weather.sunset}/>
        </RowParams>
        <StyledWeeklyForecastComponent forecast={forecast}/>
    </Card>
);

export { LocationComponent }