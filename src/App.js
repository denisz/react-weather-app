import React, { Component } from 'react';
import styled from "styled-components";
import {WidgetComponent} from "./components/widget/widget.component";
import {TitleLocationComponent} from "./components/title-location/title-location.component";
import {WeatherComponent} from "./components/weather/weather.component";
import {DegreeComponent} from "./components/degree/degree.component";

const StyledApp = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background: url(./assets/art/Bitmap.png);
    background-size: cover;          
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
`;

class App extends Component {
  render() {
    return (
        <StyledApp>
            <WidgetComponent>
                <TitleLocationComponent
                    prefix={"Weather in"}
                    title={"Stockholm"}
                />

                <Row>
                    <WeatherComponent />
                    <DegreeComponent degree={1} unit={Units.Ceils}/>
                </Row>
            </WidgetComponent>
        </StyledApp>
    );
  }
}

export default App;
