import {connect} from 'react-redux';
import {
    removeLocation
} from "../../reducers/actions";
import {EditLocationsComponent} from "./edit-locations.component";


const mapStateToProps = state => {
    const collection  = state.getIn(['global', 'locations', 'collection']);
    return {collection}
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveLocation: location => dispatch(removeLocation(location))
    }
};

const EditLocationsContainer = connect(mapStateToProps, mapDispatchToProps)(EditLocationsComponent);
export { EditLocationsContainer } ;