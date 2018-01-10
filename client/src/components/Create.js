import React, { Component } from "react";
import CreateShelterContainer from "../containers/CreateShelterContainer"

function Create () {
  return (
    <div className="white">
      <h1>Submit A Safe Space</h1>
      <CreateShelterContainer />
      <br />
      <p>Please fill all fields prior to submission. This helps ensure we have as much information as possible regarding each safe space.</p>
    </div>
  );
}

export default Create;
