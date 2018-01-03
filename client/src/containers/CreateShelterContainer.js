import { connect } from "react-redux";
import CreateShelter from "../components/CreateShelter";
import { createShelter } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createShelter: function (shelter) {
      dispatch(createShelter(shelter));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateShelter);
