import { connect } from 'react-redux';
import {fetchCurrentLocation} from "../../reducers/actions";
import {CurrentLocationComponent} from "./current-location.component";

const mapStateToProps = state => {
    const { loading } = state.getIn(['global', 'currentLocation']).toJS();
    return { loading };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestCurrentLocation: () => dispatch(fetchCurrentLocation()),
    }
};

const CurrentLocationContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentLocationComponent);
export {CurrentLocationContainer}

