import { connect } from 'react-redux';
import {changeUser} from '../state/actions';
import Register from '../components/register';

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: (user) => dispatch(changeUser(user)),
    }
  }

  export default connect(null, mapDispatchToProps)(Register);
