import { connect } from 'react-redux';
import Comments from '../components/comments';
import {requestSpots} from '../state/actions';


function mapStateToProps(state) {
    const props = {}
    props.user = state.changeUser.user;
    props.spot = state.activeSpot.activeSpot;
    return props;
}

function mapDispatchToProps(dispatch) {
    return {
      onRequestSpots: () => dispatch(requestSpots()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Comments);