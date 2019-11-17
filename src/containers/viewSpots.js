import { connect } from 'react-redux';
import ViewSpots from '../views/viewSpots';
import { requestSpots} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestSpots: () => dispatch(requestSpots())
    }
  }

  export default connect(null, mapDispatchToProps)(ViewSpots);


