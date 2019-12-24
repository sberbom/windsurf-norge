import EditSpotForm from '../components/editSpotForm';
import { connect } from 'react-redux';
import {requestSpots, updateSpotLocal} from '../state/actions';
    
const mapDispatchToProps = (dispatch) => {
    return {
      onRequestSpots: () => dispatch(requestSpots()),
      editSpot: (spot) => dispatch(updateSpotLocal(spot))
    }
  }

  function mapStateToProps(state) {
    const props = {}
    props.token = state.setToken.token;
    return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSpotForm);
