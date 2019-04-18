import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const circleFadeDelay = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
`;

const circleFadeDelayRule = css`
  ${circleFadeDelay} 1.2s infinite ease-in-out both;
`;

const Circle = props => {
    const CirclePrimitive = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${props.rotate &&
    `
      -webkit-transform: rotate(${props.rotate}deg);
      -ms-transform: rotate(${props.rotate}deg);
      transform: rotate(${props.rotate}deg);
    `} &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #fff;
      border-radius: 100%;
      animation: ${circleFadeDelayRule};
      ${props.delay &&
    `
        -webkit-animation-delay: ${props.delay}s;
        animation-delay: ${props.delay}s;
      `};
    }
  `;
    return <CirclePrimitive />;
};

const LoadingIndicatorComponent = () => (
    <Wrapper>
        <Circle />
        <Circle rotate={30} delay={-1.1} />
        <Circle rotate={60} delay={-1} />
        <Circle rotate={90} delay={-0.9} />
        <Circle rotate={120} delay={-0.8} />
        <Circle rotate={150} delay={-0.7} />
        <Circle rotate={180} delay={-0.6} />
        <Circle rotate={210} delay={-0.5} />
        <Circle rotate={240} delay={-0.4} />
        <Circle rotate={270} delay={-0.3} />
        <Circle rotate={300} delay={-0.2} />
        <Circle rotate={330} delay={-0.1} />
    </Wrapper>
);

export { LoadingIndicatorComponent };
