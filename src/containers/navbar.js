import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { changeUser, setToken} from '../state/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: (user) => dispatch(changeUser(user)),
        setToken: (token) => dispatch(setToken(token))
    }
  }

function mapStateToProps(state) {
    const props = {}
    props.user = state.changeUser.user;
    return props;
}

  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


