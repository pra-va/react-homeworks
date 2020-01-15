import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TableRow = props => {
  var removeHandler = () => {
    axios
      .delete("http://localhost:8080/api/provider/" + props.provider)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <tr>
      <th scope="row">{props.name}</th>
      <td>
        <img
          src={props.photoId}
          style={{ height: "5em" }}
          alt="Does not exist."
        />
      </td>
      <td>{props.serviceCategory}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>
        <Link to="#" className="btn btn-info">
          Edit
        </Link>
      </td>
      <td>
        <button onClick={removeHandler} className="btn btn-danger">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
