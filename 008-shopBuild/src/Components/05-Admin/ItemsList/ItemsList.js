import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow/TableRow";

class ItemsList extends Component {
  constructor() {
    super();
    this.state = { items: [] };
    axios
      .get("https://itpro2017.herokuapp.com/api/products")
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var tableRows = this.state.items.map((item, index) => {
      return (
        <TableRow
          key={index}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });
    return (
      <div>
        <table className=" text-center table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default ItemsList;
