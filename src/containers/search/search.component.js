import React from "react";
import styled from "styled-components";
import {SearchInputComponent} from "../../shared/search-input/search-input.component";
import {ListLocationsComponent} from "./list-locations.component";
import {LoadingIndicatorComponent} from "../../shared/loading-indicator/loading-indicator.component";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;    
    margin-top: 10px;
`;

const StyledSearchInputComponent = styled(SearchInputComponent)`
    flex: 0;  
`;

const StyledListLocationsComponent = styled(ListLocationsComponent)`    
    flex: 1;
`;

const SearchComponent = ({query, collection, className, loading, onChangeQuery, onSearch, onAddNewLocation}) => (
    <Card className={className}>
        <StyledSearchInputComponent
            value={query}
            onChange={onChangeQuery}
            onSearch={onSearch}
        />
        {
            loading
                ? <LoadingIndicatorComponent/>
                : <StyledListLocationsComponent
                    onAddNewLocation={onAddNewLocation}
                    collection={collection}
                />
        }

    </Card>
);

export {SearchComponent}