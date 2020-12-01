import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //hides or show info window
    activeMarker: {}, //show active marker upon click
    selectedPlace: {} //shows infowindow of the selected place
  }

  onMarkerClick = (props, marker, e) => 
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props
    });

    onClose = props => {
      if(this.state.showingInfoWindow){
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      >
      <Marker
        onClick={this.onMarkerClick}
        name={'Creme Cakes and Confectionaries'}
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
      <div>
        <h4>{this.state.selectedPlace.name}</h4>
      </div>
      </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFfiSz375mt49MN5qNHcBBW277GX2ncLs'
})(MapContainer);