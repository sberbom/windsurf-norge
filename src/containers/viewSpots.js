import { connect } from 'react-redux';
import ViewSpots from '../views/viewSpots';
import {setRoute} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (route) => dispatch(setRoute(route)),
    }
  }


  export default connect(null, mapDispatchToProps)(ViewSpots);


