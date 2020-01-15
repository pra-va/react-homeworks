import React from "react";

const TableRow = props => {
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
    </tr>
  );
};

export default TableRow;
