import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartContext from "./../../../00-Context/CartService";
import UserState from "./../../../00-Context/UserService";

const ProductInfoPresentation = props => {
  const cartService = useContext(CartContext);
  const userService = useContext(UserState);

  const postToCartUrl =
    "https://itpro2017.herokuapp.com/api/users/" +
    userService.username +
    "/cart-products";
  const addToCart = () => {
    console.log("ProductInfoPresentation.addToCart");
    axios
      .post(postToCartUrl, {
        id: Number(props.id),
        image: props.image,
        title: props.title
      })
      .then(() => {
        cartService.updateMe();
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src="https://images.unsplash.com/photo-1518302057166-c990a3585cc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
            className="card-img-top"
            alt="Unable to load"
          />
        </div>
        <div className="col-4 col-md-2">
          <h5 className="card-title text-right">Title:</h5>
          <p className="card-text text-right">About:</p>
          <p className="card-title text-right">Price:</p>
          <p className="card-text text-right">
            <small>Items In Stock:</small>
          </p>
        </div>
        <div className="col-8 col-md-4">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-title">{props.price}</p>
          <p className="card-text">
            <small>{props.quantity}</small>
          </p>
          <div className="row">
            <button onClick={addToCart} className="btn btn-light m-3">
              ADD TO CART
            </button>
            <Link to={"/merch/"} className="btn btn-light m-3">
              BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPresentation;
