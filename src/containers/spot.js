import Spot from '../components/spot';
import { connect } from 'react-redux';
import {setActiveSpot} from '../state/actions';
    
function mapStateToProps(state) {
    const props = {}
    props.spot = state.activeSpot.activeSpot;
    props.user = state.changeUser.user;
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
      setActiveSpot: (spot)  => dispatch(setActiveSpot(spot)),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Spot);
