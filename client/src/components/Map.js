import React, { Component } from  "react";
import ReactDOM from "react-dom";

class Map extends React.Component {
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 12;
      let lat = 30.266256;
      let lng = -97.736922;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '75vh'
    };
    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    );
  }
}

export default Map;
