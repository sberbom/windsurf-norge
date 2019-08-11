import React from 'react';
import GoogleMaps from './googleMaps';

class Map extends React.Component {
    state = {
        isOpen: false,
      }
    
      handleMarkerClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
      }
    
      render() {
        return (
          <GoogleMaps
            isMarkerShown={true}
            onMarkerClick={this.handleMarkerClick}
            onCloseClick={this.handleMarkerClick}
            isOpen={this.state.isOpen}
          />
        )
      }
}

export default Map;