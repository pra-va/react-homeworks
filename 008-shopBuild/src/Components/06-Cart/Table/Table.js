import React, { Component } from "react";
import TableRow from "./../TableRow/TableRow";
import axios from "axios";

class Table extends Component {
  state = {
    products: []
  };

  products = [];

  refreshComponents = () => {
    axios
      .get(
        "https://itpro2017.herokuapp.com/api/users/" +
          this.props.username +
          "/cart-products"
      )
      .then(response => {
        if (response.data.length !== this.state.products.length) {
          this.setState({ products: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.refreshComponents();
  }

  componentDidUpdate() {
    this.refreshComponents();
  }

  render() {
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
