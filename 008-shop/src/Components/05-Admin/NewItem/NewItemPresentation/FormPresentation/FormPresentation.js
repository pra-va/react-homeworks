import React from "react";

const NewItemPresentation = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="title">Title</label>
          <input
            onChange={props.titleChangedHandler}
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={props.title}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="price">Price</label>
          <input
            onChange={props.priceChangedHandler}
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            name="price"
            value={props.price}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="quantity">Quantity</label>
          <input
            onChange={props.quantityChangedHandler}
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={props.quantity}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          onChange={props.imageChangedHandler}
          type="url"
          className="form-control"
          id="image"
          name="image"
          value={props.image}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={props.descriptionChangedHandler}
          rows="3"
          className="form-control"
          id="description"
          name="description"
          value={props.description}
          required
        />
      </div>

      <button type="submit" className="btn btn-light">
        SUBMIT
      </button>
    </form>
  );
};

export default NewItemPresentation;
