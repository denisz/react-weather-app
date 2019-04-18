import React from "react";
import styled from "styled-components";
import {IconWeatherBigComponent} from "../icon-weather/icon-weather.component";
import {DegreeComponent} from "../degree/degree.component";
import {WeeklyForecastComponent} from "./weekly-forecast.component";

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
`;

const StyledWeeklyForecastComponent = styled(WeeklyForecastComponent)`
    align-self: stretch;
`;

const LocationComponent = ({ className, weather, forecast, location, prefix="" }) => (
    <Card className={className}>
        <TitleLocation>{`${prefix} ${location.fullName}`}</TitleLocation>
        <IconWeatherBigComponent icon={weather.iconCode}/>
        <DegreeComponent kelvin={weather.tempToday} withToggle/>
        <StyledWeeklyForecastComponent forecast={forecast}/>
    </Card>
);

export { LocationComponent }