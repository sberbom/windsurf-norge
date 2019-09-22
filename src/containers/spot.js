import Spot from '../components/spot';
import { connect } from 'react-redux';
    
function mapStateToProps(state) {
    const props = {}
    props.spot = state.activeSpot.activeSpot;
    return props;
}


export default connect(mapStateToProps, null)(Spot);
