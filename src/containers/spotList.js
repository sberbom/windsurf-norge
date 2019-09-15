import SpotList from '../components/spotList';
import { connect } from 'react-redux';
    
function mapStateToProps(state) {
    const props = {}
    props.spots = state.requestSpots.spots;
    props.address = state.getAddress.address;
    return props;
}


export default connect(mapStateToProps, null)(SpotList);
