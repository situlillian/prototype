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
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'hybrid', 'terrain', 'styled_map']
        }
      });

      // custom map styling
      var styledMapType = new google.maps.StyledMapType(
        [
          {elementType: 'geometry', stylers: [{color: '#fff'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: ''}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#ebebeb'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#f7f7f7'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f7f7f7'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#f7f7f7'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#f7f7f7'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ee7674'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#f7f7f7'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ee7674'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#EBEBEB'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#EBEBEB'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#EBEBEB'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#EBEBEB'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#EBEBEB'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#bdbdbd'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#BDBDBD'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: ''}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#ebebeb'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#EBEBEB'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ],
        {name: 'Styled Map'});

      const map = new maps.Map(node, mapConfig);
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');

      // geocode from shelter array
      const geocoder = new google.maps.Geocoder();
      this.props.shelters.map((s, i) => {
        let address = `${s.street} ${s.city}, ${s.state}`;
        // geocode code
        geocoder.geocode( { "address": address}, function(results, status) {
          console.log(`starting geocode`);
          if (status === "OK") {
            let pos = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            };
            let marker = new google.maps.Marker({
              map: map,
              position: pos
              // icon: "https://mediavinemarketing.com/wp-content/uploads/2016/02/map-marker-icon.png"
            });
            let infowindow = new google.maps.InfoWindow({
              content: `<p>${s.name}</p><p>${s.street} ${s.city}, ${s.state} ${s.zipcode}</p><p>${s.phone}</p>`,
              maxWidth: 200
            });
            marker.addListener('click', function() {
              infowindow.open(this.map, marker);
              map.setCenter(marker.getPosition());
            });
          } else {
            console.log("Geocode was not successful for the following reason: " + status + " for " + address);
          }
        });
      });
    }
  }

  render() {
    // map style
    const style = {
      width: "100%",
      height: "60vh"
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
