import AddSpotForm from '../components/addSpotForm';
import { connect } from 'react-redux';
    
function mapStateToProps(state) {
    const props = {}
    props.address = state.getAddress.address;
    return props;
}

export default connect(mapStateToProps, null)(AddSpotForm);
