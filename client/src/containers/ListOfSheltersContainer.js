import { connect } from "react-redux";
import ListOfShelters from "../components/ListOfShelters";
import {deleteShelter} from "../actions";

function mapStateToProps(state) {
  return {
    shelters: state.shelters
  };
}

function mapDispatchToProps (dispatch) {
  return {
    deleteShelter: function (id) {
      let action = deleteShelter(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfShelters);
