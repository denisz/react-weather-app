import React from 'react';
import { ItemLocationComponent } from "./item-location.component";
import styled from 'styled-components';
import {EmptyComponent} from "../../shared/empty/empty.component";

const List = styled.div`
    overflow-y: scroll;
`;

const ListLocationsComponent = ({ className, onAddNewLocation, collection }) => (
    <List className={className}>
        {
            collection.length === 0
                ? <EmptyComponent />
                : collection.map((location, idx) =>
                    <ItemLocationComponent
                        key={idx}
                        location={location}
                        onAdd={onAddNewLocation}
                    />)
        }
    </List>
);

export {ListLocationsComponent}