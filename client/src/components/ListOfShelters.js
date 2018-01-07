import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function ListofShelters(props) {
  let shelterDivs = props.shelters.map((s, i) => {
    return (
      <div className="shelter col-sm-6 col-lg-4" key={i}>
        <h4 className="shelterName">{s.name}</h4>
        <p>{s.phone}</p>
        <p>Address: {s.street}, {s.city}, {s.state} {s.zipcode}</p>
        <Link to={"/state/" + s._id}>View</Link>
        <p>Shelter ID: {s._id}</p>
        <button onClick={() => props.deleteShelter(s._id)}>Remove</button>
      </div>
    );
  });

  return (
    <div className="text-left state row">
      <h1 className="text-center">A List of All Shelters</h1>
      {shelterDivs}
    </div>
  );
}

ListofShelters.PropTypes = {
  shelters: PropTypes.array.isRequired
};

export default ListofShelters;
