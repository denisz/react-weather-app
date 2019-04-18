import React from 'react';
import styled from 'styled-components';
import { getDayTextByDate } from "../../utils/formatter";
import {IconWeatherSmallComponent} from "../icon-weather/icon-weather.component";
import {DegreeComponent} from "../degree/degree.component";
import {HumidityComponent} from "./humidity.component";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const DayPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

const Day = styled.div`
    text-align: center;
    font-size: 18px;
    color: white;
`;

const ConditionText = styled.div`
    text-align: center;
    font-size: 12px;
    color: white;
    font-family: "Open Sans";
    margin-bottom: 5px;
`;

const DegreeDay = styled(DegreeComponent)`
    display: inline;
    font-size: 16px;    
`;

const DegreeNight = styled(DegreeComponent)`
    display: inline;
    font-size: 14px;
    opacity: 0.8;
`;

const Humidity = styled(HumidityComponent)`
`;

const Icon = styled(IconWeatherSmallComponent)`
    margin-bottom: 5px;
`;

const ForecastDayComponent = ({ className, iconCode, tempDay, tempNight, condition, humidity, date}) => (
    <DayPanel className={className}>
        <Day>{getDayTextByDate(date)}</Day>
        <ConditionText>{condition}</ConditionText>
        <Icon icon={iconCode}/>
        <DegreeDay kelvin={tempDay}/>
        <DegreeNight kelvin={tempNight}/>
        <Humidity value={humidity}/>
    </DayPanel>
);

const StyledForecastDayComponent = styled(ForecastDayComponent)`
    border-left: ${props => props.idx > 0 ? "1px solid rgba(255, 255, 255, 0.5)": "none"};
    flex: 1;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const WeeklyForecastComponent = ({forecast, className}) => (
    <Row className={className}>
        {
            forecast.getDays().map((day, idx) =>
                <StyledForecastDayComponent
                    key={idx}
                    idx={idx}
                    iconCode={day.iconCode}
                    tempDay={day.tempDay}
                    tempNight={day.tempNight}
                    condition={day.condition}
                    humidity={day.humidity}
                    date={day.timestamp}
                />)
        }
    </Row>
);

export { WeeklyForecastComponent, ForecastDayComponent }