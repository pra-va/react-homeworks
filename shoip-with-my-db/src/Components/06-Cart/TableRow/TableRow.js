import React, { useContext } from "react";
import axios from "axios";
import CartService from "./../../00-Context/CartService";

const TableRow = props => {
  const cartService = useContext(CartService);
  const removeHandler = () => {
    axios
      .delete(
        "http://localhost:8080/shop/api/cart/" + props.username + "/" + props.id
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
