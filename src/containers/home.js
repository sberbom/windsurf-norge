import Home from '../views/home';
import { connect } from 'react-redux';
import {getPhotos} from '../state/actions';
    
function mapStateToProps(state) {
    console.log(state)
    const props = {}
    props.photos = state.getPhotos.photos;
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotos: () => dispatch(getPhotos())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
