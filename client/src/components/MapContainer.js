import {GoogleApiWrapper} from "google-maps-react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import React, { Component } from "react";
import GoogleMapContainer from "../containers/GoogleMapContainer";

class MapContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mapDiv white">
        <h2 className="text-left">Surrounding Area</h2>
        <GoogleMapContainer google={this.props.google} />
      </div>
    );
  }
}

MapContainer.PropTypes = {
  shelters: PropTypes.array.isRequired
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCYz3zWr5mDila6Pzp_VXG69aUucHVmuXI",
  libraries: ["visualization"]
})(MapContainer);
