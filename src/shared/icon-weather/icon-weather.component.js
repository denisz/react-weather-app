import React from 'react';
import cx from 'classnames';
import styled from "styled-components";
import { OpenWeatherIconMap } from './mapIcons';

const PACKAGE_NAME_OWM = "owm";

const pkg = (name) => {
    switch (name) {
        case PACKAGE_NAME_OWM:
            return (icon) => {
                const key = `wi-owm-${icon}`;
                return OpenWeatherIconMap[key] || OpenWeatherIconMap['unknown'];
            };
        default: return ()=>{};
    }
};

const IconWeatherComponent = ({ icon, packageName = PACKAGE_NAME_OWM,className }) =>
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