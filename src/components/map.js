import React from 'react';
import GoogleMaps from './googleMaps';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: null,
    }
  }

  handleMarkerClick = (index) => {
    console.log(index);
    this.setState({ isOpen: index })
  }

  componentDidMount = () => {
    this.props.onRequestSpots();
  }

  render() {
    return (
      <GoogleMaps
        isMarkerShown={true}
        onMarkerClick={this.handleMarkerClick}
        onCloseClick={this.handleMarkerClick}
        isOpen={this.state.isOpen}
        spots = {this.props.spots}
      />
    )
  }
}

export default Map;