import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function ListofShelters(props) {
  let shelterTableRows = props.shelters.map((s, i) => {
    let googleDir = "https://maps.google.com?saddr=Current+Location&daddr="
    return (
      <tr key={i}>
        <td><p>{s.name}</p></td>
        <td><p><a href={`${googleDir}${s.street}+${s.city}+${s.state}+${s.zipcode}`} target="blank">{s.street}</a></p></td>
        <td><p>{s.city}</p></td>
        <td><p><a target="blank" href={s.website}>{s.website}</a></p></td>
        <td><p>{s.phone}</p></td>
        <td><button onClick={() => props.deleteShelter(s._id)}>Remove</button></td>
      </tr>
    )
  })

  return (
    <div className="table-responsive white">
      <h1 className="text-center">Shelters by State</h1>
      <h2 className="text-left">Texas</h2>
      <table className="table table-striped table-hover text-left ">
        <thead>
          <tr>
            <th><h4>Shelter</h4></th>
            <th><h4>Address</h4></th>
            <th><h4>City</h4></th>
            <th><h4>Website</h4></th>
            <th><h4>Phone Number</h4></th>
            <th />
          </tr>
        </thead>
        <tbody>
          {shelterTableRows}
        </tbody>
      </table>
    </div>
  );
}

ListofShelters.propTypes = {
  shelters: PropTypes.array.isRequired
};

export default ListofShelters;
