import React from 'react';
import cx from 'classnames';
import styled from "styled-components";
import { OpenWeatherIconMap } from './mapIcons';


export const PACKAGE_NAME_OWM = "owm";
export const PACKAGE_NAME_OWM_DAY_NIGHT = "owm_day_night";

const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;

const pkg = (name) => {
    switch (name) {
        case PACKAGE_NAME_OWM:
            return (icon) => {
                const key = `wi-owm-${icon}`;
                return OpenWeatherIconMap[key] || OpenWeatherIconMap['unknown'];
            };
        case PACKAGE_NAME_OWM_DAY_NIGHT:
            return (icon) => {
                const suffix = isDayTime ? 'day' : 'night';
                const key = `wi-owm-${suffix}-${icon}`;
                return OpenWeatherIconMap[key] || OpenWeatherIconMap['unknown'];
            };
        default: return ()=>{};
    }
};

const IconWeatherComponent = ({ icon, packageName = PACKAGE_NAME_OWM, className }) =>
    <i className={cx('wi', pkg(packageName)(icon), className)} />;

const IconWeatherSmallComponent = styled(IconWeatherComponent)`
    font-size: 40px;
    color: white;
`;

const IconWeatherBigComponent = styled(IconWeatherComponent)`
    font-size: 100px;
    color: white;
`;

export {
    IconWeatherComponent,
    IconWeatherSmallComponent,
    IconWeatherBigComponent
}