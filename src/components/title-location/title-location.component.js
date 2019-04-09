import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    font-family: 'Open Sans'; 
    font-size:30px;
    color: white;
`;

const Refresh = styled.i`
    cursor: pointer;
`;

const TitleLocationComponent = ({ className, prefix = 'Weather in', title = '', onClick}) => {
    return <Panel className={className}>{`${prefix} ${title}`} <Refresh className={"wi wi-refresh"} onClick={onClick}></Refresh></Panel>
};

export { TitleLocationComponent }