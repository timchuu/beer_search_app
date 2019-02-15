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
            height: '500px',
            
          
          }
        const { locations } = this.props.mapData.singleBrew.data
        
        
        let newPoints = locations.map(({latitude, longitude})=>{
          return {latitude, longitude}
        });
         
          
        let newData = newPoints.map(a =>({lat : a.latitude, lng: a.longitude}))

       
        
        
        let bounds = new this.props.google.maps.LatLngBounds();
          for(var i = 0; i < newData.length; i++){
            bounds.extend(newData[i]);
            
          }
         
       
            
          
        return (
            <div style={style}>
            
        <Map google={this.props.google}  zoom={8}  initialCenter={{
            lat:locations[0].latitude ,
            lng: locations[0].longitude
          }}
            bounds={bounds}
           onClick={this.onMapClicked}>
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