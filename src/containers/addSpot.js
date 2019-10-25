import AddSpot from '../views/addSpot';
import { connect } from 'react-redux';
import {setRoute} from '../state/actions';
    
function mapStateToProps(state) {
    const props = {}
    props.user = state.changeUser.user;
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (route) => dispatch(setRoute(route)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddSpot);
