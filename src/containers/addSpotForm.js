import AddSpotForm from '../components/addSpotForm';
import { connect } from 'react-redux';
import {requestSpots} from '../state/actions';
    
function mapStateToProps(state) {
    const props = {}
    props.address = state.getAddress.address;
    props.lat = state.getAddress.lat;
    props.lng = state.getAddress.lng;
    props.spots = state.requestSpots.spots;
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
      onRequestSpots: () => dispatch(requestSpots()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotForm);
