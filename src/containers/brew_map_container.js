import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'



 class BrewMapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

    render() {
        
        const style = {
            width: '100vw',
            height: '500px'
          }
        const { locations } = this.props.mapData.singleBrew.data
      
      
        console.log(this.props)
        return (
            <div style={style}>
            <div>
            {locations[0].longitude}
        </div>
        <Map google={this.props.google}  zoom={14}  initialCenter={{
            lat:locations[0].latitude ,
            lng: locations[0].longitude
          }} onClick={this.onMapClicked}>
          {locations.map((marker,i) =>(
                <Marker
                position={{ lat: marker.latitude, lng: marker.longitude }}
                key={marker.id} onClick={this.onMarkerClick}
                name={marker.name}
                />))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
           
        </Map>
        
        </div>  

       
        )
    }
}



export default GoogleApiWrapper({
    apiKey: ('AIzaSyCDQ8HjoxyJW9TNjoOnySsAcD0OIHtqta8')
  })(BrewMapContainer)


  /*<Marker
  position={{lat:locations[0].latitude ,
lng: locations[0].longitude}} onClick={this.onMarkerClick}
/>
*/