export function loadShelters() {
  return function (dispatch) {
    fetch("/state").then((res) => {
      return res.json();
    }).then((shelters) => {
      dispatch(sheltersLoaded(shelters));
    });
  };
}

export function sheltersLoaded(shelters) {
  return {
    type: "SHELTERS_LOADED",
    value: shelters
  }
}

export function createShelter(s) {
  return function (dispatch) {
    fetch("/state", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(s)
    }).then(() => dispatch(loadShelters()));
  };
}

export function getShelter(id) {
  return function (dispatch) {
    fetch("/state/" + id)
    .then( (response) => {
      return response.json();
    }).then((shelter) => {
      dispatch(getShelterDone(shelter));
    });
  };
}

function getShelterDone(shelter) {
  return {
    type: "GET_SHELTER_DONE",
    value: shelter
  };
}

export function deleteShelter(id) {
  return function (dispatch) {
    fetch("/state/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      dispatch(shelterDeleted());
      dispatch(loadShelters());
    });
  };
}

function shelterDeleted(shelter) {
  return {
    type: "SHELTER_DELETED",
    value: shelter
  };
}
