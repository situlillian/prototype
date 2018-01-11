import React from  "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      position: {
        lat: 30.266256,
        lng: -97.736922
      }
    };
  }
  componentDidMount() {
    this.loadMap();
    console.log(this.props.shelters);
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
      const position = this.state.position;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 10;
      let lat = position.lat;
      let lng = position.lng;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
      });

      const map = new maps.Map(node, mapConfig);

      // new marker test
      // const marker = new google.maps.Marker({
      //   position: {
      //     lat: lat,
      //     lng: lng
      //   },
      //   map: map,
      //   title: "Hello World!"
      // });

      // geocode
      const geocoder = new google.maps.Geocoder();
      // from shelter array
      this.props.shelters.map((s, i) => {
        let address = `${s.street} ${s.city}, ${s.state}`;
        // geocode code
        geocoder.geocode( { "address": address}, function(results, status) {
          console.log(`starting geocode`);
          if (status === "OK") {
            console.log(results[0].geometry.location.lat);
            let marker = new google.maps.Marker({
              map: map,
              position: {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              }
            });
            let infowindow = new google.maps.InfoWindow({
              content: `<h3>${s.name}</h3>`
            });
            marker.addListener('click', function() {
              infowindow.open(this.map, marker);
            });
          } else {
            alert("Geocode was not successful for the following reason: " + status + " for " + address);
          }
        });
      });
    }
  }

  render() {
    // map style
    const style = {
      width: "100%",
      height: "50vh"
    };

    // render
    return (
      <div>
        <div ref="map" style={style}>
          loading map...
        </div>
      </div>
    );
  }
}

Map.PropTypes = {
  shelters: PropTypes.array.isRequired
};

export default Map;
