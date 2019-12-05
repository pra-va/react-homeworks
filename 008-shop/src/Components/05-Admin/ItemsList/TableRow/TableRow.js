import React from "react";
import { Link } from "react-router-dom";

const TableRow = props => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>
        <img src={props.image} style={{ height: "5em" }} alt="Unable to load" />
      </td>
      <td>{props.title}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <td>
        <Link to={"/edit/" + props.id} className="btn btn-light">
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
