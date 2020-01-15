import React, { Component } from "react";
import TableRow from "./../TableRow/TableRow";
import axios from "axios";

class Table extends Component {
  state = {
    products: []
  };

  products = [];

  refreshComponents = () => {
    if (this.props.username.length > 0 && this.props.username != null) {
      axios
        .get("http://localhost:8080/shop/api/cart/" + this.props.username)
        .then(response => {
          if (response.data.length !== this.state.products.length) {
            this.setState({ products: response.data });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      if (this.state.products.length > 0) {
        this.setState({ products: [] });
      }
    }
  };

  componentDidMount() {
    this.refreshComponents();
  }

  componentDidUpdate() {
    this.refreshComponents();
  }

  render() {
    if (this.state.products.length > 0) {
      var tableRows = this.state.products.map((item, index) => {
        return (
          <TableRow
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            username={this.props.username}
            refreshComponents={this.refreshComponents}
          />
        );
      });
    }

    return (
      <div className="container">
        <table className=" text-center table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
