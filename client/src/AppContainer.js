import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadShelters } from "./actions";

function mapDispatchToProps (dispatch) {
  return {
    loadShelters: function () {
      dispatch(loadShelters());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
