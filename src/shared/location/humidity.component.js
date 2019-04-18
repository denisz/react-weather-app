import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    font-size: 16px;
    color: white;
    font-family: "Open Sans";
`;

const Icon = styled.i`
    color: white;
`;

const Value = styled.span`
    margin-left: 10px;
`;

const HumidityComponent = ({ value }) => {
    return (
        <Row>
            <Icon className="wi wi-humidity" /><Value>{`${value}`}</Value>
        </Row>
    )
};

export { HumidityComponent }