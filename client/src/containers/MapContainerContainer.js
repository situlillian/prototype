import { connect } from "react-redux";
import MapContainer from "../components/MapContainer";

function mapStateToProps(state) {
  return {
    shelters: state.shelters
  };
}

export default connect(mapStateToProps)(MapContainer);
