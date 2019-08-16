import SpotList from '../components/spotList';
import { connect } from 'react-redux';
    
function mapStateToProps(state) {
    const props = {}
    props.spots = state.requestSpots.spots;
    return props;
}


export default connect(mapStateToProps, null)(SpotList);
