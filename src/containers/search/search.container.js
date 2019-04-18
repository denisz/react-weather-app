import {connect} from 'react-redux';
import {
    addNewLocation,
    fetchFindLocationWithQuery,
    filterFindLocationWithQuery
} from "../../reducers/actions";
import {SearchComponent} from "./search.component";

const mapStateToProps = state => {
    const { query, collection, loading, mode } = state.getIn(['global', 'findLocation']).toJS();
    return { query, collection, loading, mode };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeQuery: query => dispatch(filterFindLocationWithQuery(query)),
        onSearch: query => dispatch(fetchFindLocationWithQuery(query)),
        onAddNewLocation: location => dispatch(addNewLocation(location)),
    }
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
export { SearchContainer } ;