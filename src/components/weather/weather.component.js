import React from 'react';
import styled from "styled-components";

const Icon = styled.i`
    color: white;
    font-size: 140px;
    text-align: right;
`;

class WeatherComponent extends React.Component {
    render() {
        const { icon } = this.props;
        return (
            <div>
                <Icon className="wi wi-night-rain" />
            </div>
        )
    }
}

export { WeatherComponent }