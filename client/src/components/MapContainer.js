import {GoogleApiWrapper} from "google-maps-react"
import React from "react";
import Map from "./Map"

class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Shelter Map</h1>
        <Map google={this.props.google} />
      </div>

    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCYz3zWr5mDila6Pzp_VXG69aUucHVmuXI",
  libraries: ["visualization"]
})(MapContainer);
