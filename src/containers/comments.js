import { connect } from 'react-redux';
import Comments from '../components/comments';

function mapStateToProps(state) {
    const props = {}
    props.user = state.changeUser.user;
    props.spot = state.activeSpot.activeSpot;
    return props;
}

export default connect(mapStateToProps, null)(Comments);