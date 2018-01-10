import { connect } from "react-redux";
import Map from "../components/Map";

function mapStateToProps(state) {
  return {
    shelters: state.shelters
  };
}

export default connect(mapStateToProps)(Map);
