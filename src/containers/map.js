import Map from '../components/map';
import { connect } from 'react-redux';
import {requestSpots, getAddress} from '../state/actions';
    
function mapStateToProps(state) {
    const props = {}
    props.spots = state.requestSpots.spots;
    props.test = "test;"
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
      onRequestSpots: () => dispatch(requestSpots()),
      onGetAddress: (lat, lng)  => dispatch(getAddress(lat, lng)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Map);
