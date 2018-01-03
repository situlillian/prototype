import React from "react";

class ShelterDetail extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getShelter(id);
  }

  render() {
    if (this.props.shelter) {
      return (
        <div>
          <h1>{this.props.shelter.name}</h1>
          <p>Address: {this.props.shelter.street}<br />{this.props.shelter.city}, {this.props.shelter.state} {this.props.shelter.zipcode}</p>
        </div>
      );
    }
    return <div>Loading Shelter.. Please standby!</div>
  }
}

export default ShelterDetail;
