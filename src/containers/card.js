import Card from '../components/card';
import { connect } from 'react-redux';
import {setActiveSpot, setRoute} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
      setActiveSpot: (spot)  => dispatch(setActiveSpot(spot)),
      setRoute: (route) => dispatch(setRoute(route))
    }
  }

export default connect(null, mapDispatchToProps)(Card);
