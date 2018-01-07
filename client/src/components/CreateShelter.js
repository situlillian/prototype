import React from "react";
import {Link} from "react-router-dom";

class CreateShelter extends React.Component {
  constructor() {
    super();

    this.state = {
      shelter: {
        image: "",
        name: "",
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
          <h1>Thank you for your submission!</h1>
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
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createShelter) {
              this.props.createShelter(this.state.shelter);
            }
            this.setState({isSubmitted: !this.state.isSubmitted});
            console.log(this.state.isSubmitted);
          }}>
            <div>
              Image: <input onChange={(e) => {
                const shelter = {image: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div>
              Shelter Name: <input onChange={(e) => {
                const shelter = {name: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div>
              Phone Number: <input onChange={(e) => {
                const shelter = {phone: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div>
              Street Address: <input onChange={(e) => {
                const shelter = {street: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div>
              City: <input onChange={(e) => {
                const shelter = {city: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <div>
              State: <select onChange={(e) => {
                const shelter = {state: e.target.value};
                this.setState({
                  goat: Object.assign(this.state.shelter, shelter)
                });
              }} >
                <option value="CA">CA</option>
                <option value="NM">NM</option>
                <option value="TX">TX</option>
              </select>
            </div>
            <div>
              Zipcode: <input onChange={(e) => {
                const shelter = {zipcode: e.target.value};
                this.setState({
                  shelter: Object.assign(this.state.shelter, shelter)
                });
              }} />
            </div>
            <button type="submit">Add shelter!</button>
          </form>
        </div>
      );
    }
  }
}

export default CreateShelter;
