import styled from "styled-components";
import SliderSlick from "react-slick/lib";
import React from "react";

const SliderItem = styled.div`
    outline: none;    
    height: 550px;    
`;

const Slider = ({ children, settings = {
    dots: true,
    dotsClass: 'slick-dots w-slider-dots',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
} }) => {
    return <SliderSlick {...settings}>{children}</SliderSlick>;
};

export { Slider, SliderItem };