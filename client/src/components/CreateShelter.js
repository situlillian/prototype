import React from "react";
import {Link} from "react-router-dom";

class CreateShelter extends React.Component {
  constructor() {
    super();

    this.state = {
      shelter: {
        image: "",
        name: "",
        email: "",
        website: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zipcode: ""
      },
      isSubmitted: false
    };
  }

  render() {
    if (this.state.isSubmitted) {
      return (
        <div>
          <h3>Thank you for your submission!</h3>
          <Link to="/state">
            <p>View All Shelters</p>
          </Link>
          <button onClick={(e) => {
            e.preventDefault();
            this.setState({isSubmitted: !this.state.isSubmitted});
          }}>Add another shelter</button>
        </div>
      );
    } else {
      return (
        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
          <form className="submitDiv" onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createShelter) {
              this.props.createShelter(this.state.shelter);
            }
            this.setState({isSubmitted: !this.state.isSubmitted});
            console.log(this.state.isSubmitted);
          }}>
            {/* <div className="col-4">
              Image: <input onChange={(e) => {
                const shelter = {image: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div> */}
            <div className="col-4">
              Shelter Name: <input onChange={(e) => {
                const shelter = {name: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div className="col-4">
              Contact Email: <input onChange={(e) => {
                const shelter = {email: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div className="col-4">
              Website: <input onChange={(e) => {
                const shelter = {website: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div className="col-4">
              Phone Number: <input onChange={(e) => {
                const shelter = {phone: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div className="col-4">
              Street Address: <input onChange={(e) => {
                const shelter = {street: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div className="col-4">
              City: <input onChange={(e) => {
                const shelter = {city: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div className="col-4">
              State: <select onChange={(e) => {
                const shelter = {state: e.target.value};
                this.setState({
                  goat: Object.assign(this.state.shelter, shelter)
                });
              }} >
                <option>Select State</option>
                <option value="CA">CA</option>
                <option value="TX">TX</option>
              </select>
            </div>
            <div className="col-4">
              Zipcode: <input onChange={(e) => {
                const shelter = {zipcode: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <button type="submit" className="btn-block">Submit Shelter</button>
          </form>
        </div>
      );
    }
  }
}

export default CreateShelter;
