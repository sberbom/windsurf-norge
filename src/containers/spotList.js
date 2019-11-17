import SpotList from '../components/spotList';
import { connect } from 'react-redux';
import {requestSpots} from '../state/actions';

    
function mapStateToProps(state) {
    const props = {}
    props.spots = state.requestSpots.spots;
    props.address = state.getAddress.address;
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestSpots: () => dispatch(requestSpots())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(SpotList);
