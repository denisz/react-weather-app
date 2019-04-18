import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Card = styled(Column)`       
    height: 60px;    
    justify-content: space-evenly;
    color: white;
    font-size: 18px;
    font-family: "Open Sans";
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 10px;    
`;

const Name = styled.div`
`;

const Coord = styled.div`
    font-size: 12px;   
`;

const BtnAction = styled.button`
    border: none;
    background: none;
    color: white;
    font-size: 30px;
    display: block;    
    padding: 0;
    margin: 0;    
    cursor: pointer;
`;

const ItemLocationComponent = ({className, onAdd, location}) => {
    return (
        <Card className={className}>
            <Row>
                <Column>
                    <Name>{`${location.fullName}`}</Name>
                    <Coord>{`${location.position.lat} ${location.position.lon}`}</Coord>
                </Column>
                <BtnAction onClick={() => onAdd(location)}>+</BtnAction>
            </Row>
        </Card>
    )
};

export {ItemLocationComponent}