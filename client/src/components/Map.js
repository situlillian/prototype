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

      let zoom = 14;
      let lat = position.lat;
      let lng = position.lng;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
      });

      this.map = new maps.Map(node, mapConfig);

      // new marker test
      // const marker = new google.maps.Marker({
      //   position: {
      //     lat: lat,
      //     lng: lng
      //   },
      //   map: this.map,
      //   title: "Hello World!"
      // });
      //
      // geocode
      const geocoder = new google.maps.Geocoder();
      // from shelter array
      this.props.shelters.map((s, i) => {
        let address = `${s.street} ${s.city}, ${s.state}`;
        console.log(address);
        // geocode code
        geocoder.geocode( { "address": address}, function(results, status) {
          console.log(`starting geocode`);
          if (status === "OK") {
            console.log(results[0].geometry.location.lat);
            let marker = new google.maps.Marker({
              map: this.map,
              position: results[0].geometry.location
            });
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      });
    }
  }

  render() {
    let shelterDivs = this.props.shelters.map((s, i) => {
      console.log(s);
      return (
        <div className="shelter col-sm-6 col-lg-4" key={i}>
          <h4 className="shelterName">{s.name}</h4>
          <p>{s.phone}</p>
          <p>{s.street}, {s.city}, {s.state} {s.zipcode}</p>
          <Link to={"/state/" + s._id}>View</Link>
        </div>
      );
    });

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
        <div className="text-left state row">
          {shelterDivs}
        </div>
      </div>
    );
  }
}

Map.PropTypes = {
  shelters: PropTypes.array.isRequired
};

export default Map;
