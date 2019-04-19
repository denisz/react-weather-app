import React from 'react';
import { ItemLocationComponent } from "./item-location.component";
import styled from 'styled-components';

const List = styled.div`
    overflow-y: auto;
`;

const ListLocationsComponent = ({ className, onRemoveLocation, collection }) => (
    <List className={className}>
        {
            collection.length === 0
                ? <div />
                : collection.map(({location}, idx) =>
                    <ItemLocationComponent
                        key={idx}
                        location={location}
                        onRemove={onRemoveLocation}
                    />)
        }
    </List>
);

export {ListLocationsComponent}