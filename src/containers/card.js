import Card from '../components/card';
import { connect } from 'react-redux';
import {setActiveSpot} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
      setActiveSpot: (spot)  => dispatch(setActiveSpot(spot)),
    }
  }

export default connect(null, mapDispatchToProps)(Card);
