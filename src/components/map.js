import React from 'react';
import GoogleMaps from './googleMaps';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: null,
      draggableMarker: null,
    }
  }

  handleMarkerClick = (index) => {
    this.setState({ isOpen: index })
  }

  componentDidMount = () => {
    this.props.onRequestSpots();
  }

  onAddDraggableMarker = (marker) => {
    this.setState({draggableMarker: marker});
  }

  onPositionChanged = () => {
    const pos = this.state.draggableMarker.getPosition().toString().slice(1,-1).replace(/\s/g, '').split(",");
    const lat = Number(pos[0]);
    const lng = Number(pos[1]);
    this.props.onGetAddress(lat,lng);
  }

  render() {
    return (
      <GoogleMaps
        isMarkerShown={true}
        onMarkerClick={this.handleMarkerClick}
        onCloseClick={this.handleMarkerClick}
        isOpen={this.state.isOpen}
        spots = {this.props.spots}
        addSpot = {this.props.addSpot}
        onMarkerMounted = {this.onAddDraggableMarker}
        onDragEnd = {this.onPositionChanged}
      />
    )
  }
}

export default Map;