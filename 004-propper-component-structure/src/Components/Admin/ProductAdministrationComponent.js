import React from "react";

const AdminForm = props => {
  return (
    <form onSubmit={props.formSubmitHandler} className="text-right">
      <div className="form-group row">
        <label for="title" className="col-sm-2 col-form-label">
          Title
        </label>
        <div className="col-sm-10">
          <input
            name="title"
            required
            autoFocus
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="imageUrl" className="col-sm-2 col-form-label">
          Image URL
        </label>
        <div className="col-sm-10">
          <input
            name="url"
            required
            type="url"
            className="form-control"
            id="imageUrl"
            placeholder="Image URL"
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="description" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <input
            name="description"
            required
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="price" className="col-sm-2 col-form-label">
          Price
        </label>
        <div className="col-sm-10">
          <input
            name="price"
            step=".01"
            required
            type="number"
            className="form-control"
            id="price"
            placeholder="Price"
          />
        </div>
      </div>
      <div className="form-group row ">
        <label for="quantity" className="col-sm-2 col-form-label">
          Quantity
        </label>
        <div className="col-sm-10">
          <input
            name="quantity"
            required
            type="number"
            className="form-control"
            id="quantity"
            placeholder="Quantity"
          />
        </div>
      </div>
      <div className="form-group row d-flex justify-content-center">
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AdminForm;
