import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: space-evenly;
    height: 100%;
`;

const Btn = styled.button`
    background-color: rgba(0, 255, 164, 0.63);
    border: 0;
    border-radius: 22px;
    box-sizing: border-box;
    margin: 0 10px;
    width: 200px;
    color: white;
    padding: 0;
    height: 44px;
    font-size: 20px;
    cursor: pointer;
`;

const Text = styled.div`
    color: white;
    font-size: 18px;
    padding: 0 100px;
    text-align: center;
`;

const RequestPermissionComponent = ({ onClick }) => {
    return (
        <Card>
            <Text>4xxi need access to your location in order to get local weather ...and track you.</Text>
            <Btn onClick={onClick}>Enable location</Btn>
        </Card>
    )
};


export { RequestPermissionComponent }