import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import {setRoute} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (route) => dispatch(setRoute(route)),
    }
  }

  export default connect(null, mapDispatchToProps)(Navbar);


