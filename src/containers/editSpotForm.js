import EditSpotForm from '../components/editSpotForm';
import { connect } from 'react-redux';
import {requestSpots, updateSpotLocal} from '../state/actions';
    
const mapDispatchToProps = (dispatch) => {
    return {
      onRequestSpots: () => dispatch(requestSpots()),
      editSpot: (spot) => dispatch(updateSpotLocal(spot))
    }
  }

export default connect(null, mapDispatchToProps)(EditSpotForm);
