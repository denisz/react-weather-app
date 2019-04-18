import React from 'react';
import styled from "styled-components";
import {WidgetWeatherContainer} from "./containers/widget-weather/widget-weather.container";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(./assets/art/Bitmap.png);
    background-size: cover;              
`;

const App = () => (
    <Wrapper>
        <WidgetWeatherContainer />
    </Wrapper>
);


export default App;
