import EditSpot from '../views/editSpot';
import { connect } from 'react-redux';
    
function mapStateToProps(state) {
    const props = {}
    props.spot = state.activeSpot.activeSpot;
    props.user = state.changeUser.user;
    return props;
}


export default connect(mapStateToProps, null)(EditSpot);
