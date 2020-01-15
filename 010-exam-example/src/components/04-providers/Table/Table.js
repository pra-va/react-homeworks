import React, { Component } from "react";
import TableRow from "../TableRow/TableRow";
import axios from "axios";
import pic1 from "./../../../resources/1.jpg";
import pic2 from "./../../../resources/2.jpg";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      photos: [pic1, pic2]
    };
  }

  refreshComponents = () => {
    axios
      .get(
        "http://localhost:8080/backspace-perlaikymo-app/api/provider/services/" +
          this.props.provider
      )
      .then(response => {
        if (response.data.length !== this.state.services.length) {
          this.setState({ services: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.refreshComponents();
  }

  render() {
    if (this.state.services.length > 0) {
      var tableRows = this.state.services.map((item, index) => {
        return (
          <TableRow
            key={index}
            name={item.name}
            photoId={this.state.photos[item.photoId]}
            serviceCategory={item.serviceCategory}
            description={item.description}
            price={item.price}
            provider={this.props.provider}
          />
        );
      });
    }

    return (
      <div className="container">
        {this.state.services.length < 5 ? (
          <div className="alert alert-danger" role="alert">
            Less then 3 services present in the table.
          </div>
        ) : (
          <div></div>
        )}
        <table className=" text-center table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">PhotoId</th>
              <th scope="col">ServiceCategory</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
