import React, {useState} from 'react';
import {Kelvin2C, Kelvin2F} from "../../utils/temp-converter";
import styled from "styled-components";

const Degree = styled.div`
    color: white;
    font-size: 100px;
    font-family: "Open Sans";
    display: flex;
`;

const Icon = styled.i``;

const Btn = styled.div`
    font-size: 40px;
    cursor: pointer;
`;

const IconDegree = ({...rest}) => <Icon {...rest} className={"wi wi-degrees"}/>;
const BtnCelsius = ({...rest}) => <Btn {...rest} className={"wi wi-celsius"}/>;
const BtnFarenheit = ({...rest}) => <Btn {...rest} className={"wi wi-fahrenheit"}/>;

const Toggle = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    margin-left: 25px;       
`;

const DegreeComponent = ({className, kelvin, withToggle = false}) => {
    const [unit, setUnit] = useState(Units.Celsius);
    let degree = kelvin;

    switch (unit) {
        case Units.Celsius:
            degree = Kelvin2C(kelvin);
            break;
        case Units.Farenheit:
            degree = Kelvin2F(kelvin);
            break;
        default:
            break;
    }


    return (
        <Degree className={className}>
            <span>{degree >> 0}</span>
            <IconDegree/>
            {
                withToggle &&
                <Toggle>
                    <BtnCelsius onClick={() => setUnit(Units.Celsius)}/>
                    <BtnFarenheit onClick={() => setUnit(Units.Farenheit)}/>
                </Toggle>
            }

        </Degree>
    );
};

export const Units = {
    Celsius: 'Celsius',
    Farenheit: 'Farenheit',
};

export {DegreeComponent}