import { connect } from 'react-redux';
import LogIn from '../components/logIn';
import {changeUser} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: (user) => dispatch(changeUser(user)),
    }
  }

  export default connect(null, mapDispatchToProps)(LogIn);
