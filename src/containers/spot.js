import Spot from '../components/spot';
import { connect } from 'react-redux';
    
function mapStateToProps(state) {
    const props = {}
    props.spots = state.requestSpots.spots[0];
    return props;
}


export default connect(mapStateToProps, null)(Spot);
