import React from 'react';
import styled from 'styled-components';


const Row = styled.div`
    text-align:center;
    color: white;
    font-size: 40px;
    font-family: "Open Sans";
`;

const EmptyComponent = () => (
    <Row>Not Found</Row>
);

export { EmptyComponent }