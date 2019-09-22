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

  handleMarkerClick = (name) => {
    this.setState({ isOpen: name })
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
    const center = this.props.center ? this.props.center : { lat: 61.2383973, lng: 11.2987633 };
    const zoom = this.props.zoom ? this.props.zoom : 6;
    return (
      <GoogleMaps
        isMarkerShown={true}
        onMarkerClick={this.handleMarkerClick}
        onCloseClick={this.handleMarkerClick}
        isOpen={this.state.isOpen}
        spots = {this.props.spots}
        addSpot = {this.props.addSpot}
        oneSpot = {this.props.oneSpot}
        spot = {this.props.spot}
        onMarkerMounted = {this.onAddDraggableMarker}
        onDragEnd = {this.onPositionChanged}
        center = {center}
        zoom = {zoom}
      />
    )
  }
}

export default Map;