import React from "react";
import {GoogleApiWrapper} from 'google-maps-react';
import Map from "./Map";

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCYz3zWr5mDila6Pzp_VXG69aUucHVmuXI"
})(MapContainer);
