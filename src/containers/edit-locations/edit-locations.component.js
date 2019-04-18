import React from "react";
import styled from "styled-components";
import {ListLocationsComponent} from "./list-locations.component";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;    
    margin-top: 10px;
`;

const StyledListLocationsComponent = styled(ListLocationsComponent)`    
    flex: 1;
`;

const Title = styled.div`
    font-family: "Open Sans"; 
    font-size:30px;
    color: white;
    text-align: center;
    margin-bottom: 15px;
`;

const EditLocationsComponent = ({collection, className, loading, onChangeQuery, onSearch, onRemoveLocation, onAddNewLocation, onEditMode}) => (
    <Card className={className}>
        <Title>List locations:</Title>
        <StyledListLocationsComponent
            onRemoveLocation={onRemoveLocation}
            collection={collection}
        />
    </Card>
);

export {EditLocationsComponent}