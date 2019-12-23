import { connect } from 'react-redux';
import LogIn from '../components/logIn';
import {changeUser, setToken} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: (user) => dispatch(changeUser(user)),
        setToken: (token) => dispatch(setToken(token))
    }
  }

  export default connect(null, mapDispatchToProps)(LogIn);
