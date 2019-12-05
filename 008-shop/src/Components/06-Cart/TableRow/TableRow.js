import React, { useContext } from "react";
import axios from "axios";
import CartService from "./../../00-Context/CartService";

const TableRow = props => {
  const cartService = useContext(CartService);
  const removeHandler = () => {
    axios
      .delete(
        "https://itpro2017.herokuapp.com/api/users/" +
          props.username +
          "/cart-products/" +
          props.id
      )
      .then(() => {
        props.refreshComponents();
        cartService.updateMe();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>
        <img src={props.image} style={{ height: "5em" }} alt="Unable to load" />
      </td>
      <td>{props.title}</td>
      <td>
        <button onClick={removeHandler} className="btn btn-danger">
          Remove From Cart
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
