import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function ListofShelters(props) {
  let shelterDivs = props.shelters.map((s, i) => {
    return (
      <div key={i}>
        <h2>Shelter ID: {s._id}</h2>
        <ul>
          <li>Name: {s.name}</li>
          <li>Phone: {s.phone}</li>
          <li>Address: {s.street}, {s.city}, {s.state} {s.zipcode}</li>
        </ul>
        <Link to={"/state/" + s._id}>View</Link>
        <button onClick={() => props.deleteShelter(s._id)}>Remove</button>
      </div>
    );
  });

  return (
    <div>
      <h1>A List of All Shelters</h1>
      {shelterDivs}
    </div>
  );
}

ListofShelters.PropTypes = {
  shelters: PropTypes.array.isRequired
};

export default ListofShelters;
