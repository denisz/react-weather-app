import React, {useEffect} from "react";
import {connect} from 'react-redux';
import styled from "styled-components";
import {Slider, SliderItem} from "./slider.component";
import {SearchContainer} from "../search/search.container";
import {CurrentLocationContainer} from "../current-location/current-location.container";
import {LocationComponent} from "../../shared/location/location.component";
import {updateWeather} from "../../reducers/actions";
import {device} from "../../utils/device";
import {EditLocationsContainer} from "../edit-locations/edit-locations.container";

const Card = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;                
`;

const Wrapper = styled.div`

    @media ${device.desktop} {
        margin: 25px;
        width: 600px;
        height: 550px;
    }
    
    @media ${device.tablet} {
        margin: 0;
        width: 100%;
        height: 100%;
    }    
`;


const WidgetWeatherComponent = ({locations, onRefresh}) => {
    useEffect(() => {
        onRefresh();
    }, []);

    return (
        <Card>
            <Wrapper>
                <Slider >
                    <SliderItem>
                        <EditLocationsContainer/>
                    </SliderItem>
                    <SliderItem>
                        <SearchContainer/>
                    </SliderItem>

                    {
                        !locations.some(l => l.location.isCurrent) && (
                            <SliderItem>
                                <CurrentLocationContainer/>
                            </SliderItem>
                        )
                    }

                    {
                        locations.map(({weather, forecast, location}, idx) => (
                            <SliderItem key={idx}>
                                <LocationComponent
                                    weather={weather}
                                    forecast={forecast}
                                    location={location}
                                    prefix={location.isCurrent ? "" : "Weather in"}
                                />
                            </SliderItem>
                        ))
                    }
                </Slider>
            </Wrapper>
        </Card>
    )
};

const mapStateToProps = state => {
    const locations = state.getIn(['global', 'locations', 'collection']);
    return {locations}
};

const mapDispatchToProps = dispatch => {
    return {
        onRefresh: () => dispatch(updateWeather())
    };
};

const WidgetWeatherContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetWeatherComponent);
export {WidgetWeatherContainer}