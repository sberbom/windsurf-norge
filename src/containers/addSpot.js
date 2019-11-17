import AddSpot from '../views/addSpot';
import { connect } from 'react-redux';
    
function mapStateToProps(state) {
    const props = {}
    props.user = state.changeUser.user;
    return props;
}

export default connect(mapStateToProps, null)(AddSpot);
