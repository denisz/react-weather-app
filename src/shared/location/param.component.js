import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import moment from "moment";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Icon = styled.i`
    font-size: 18px;
    color: white;
    margin-right: 5px;
`;

const Value = styled.div`
    font-size: 18px;
    color: white;
    font-familt: "Open Sans";
`;

const ParamComponent = ({ className, value, icon}) => {
    return (
        <Row className={className}>
            <Icon className={cx('wi', `wi-${icon}`)}/>
            <Value>{value}</Value>
        </Row>
    )
};

const PressureComponent = ({ value, ...rest }) =>
    <ParamComponent value={`${value >> 0} hPa`} {...rest} icon={'barometer'}/>;

const SunriseComponent = ({ value, ...rest }) =>
    <ParamComponent value={moment(value).format('HH:MM')} icon={'sunrise'} {...rest} />;

const SunsetComponent = ({ value, ...rest }) =>
    <ParamComponent value={moment(value).format('HH:MM')} icon={'sunset'} {...rest} />;

export {
    ParamComponent,
    PressureComponent,
    SunriseComponent,
    SunsetComponent
};