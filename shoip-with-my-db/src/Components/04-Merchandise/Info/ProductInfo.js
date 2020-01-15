import React, { Component } from "react";
import axios from "axios";

import ProductInfoPresentation from "./ProductInfoPresentation/ProductInfoPresentation";

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      image: "",
      description: "",
      price: "",
      quantity: ""
    };
  }

  componentDidMount() {
    const getProductUrl =
      "http://localhost:8080/shop/api/products/" + this.props.match.params.id;

    axios
      .get(getProductUrl)
      .then(response => {
        this.setState(response.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <ProductInfoPresentation
          id={this.state.id}
          title={this.state.title}
          image={this.state.image}
          description={this.state.description}
          price={this.state.price}
          quantity={this.state.quantity}
        />
      </div>
    );
  }
}

export default ProductInfo;
