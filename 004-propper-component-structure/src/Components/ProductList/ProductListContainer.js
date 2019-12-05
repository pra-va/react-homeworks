import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./Card/Card";

class ProductListContainer extends Component {
  constructor() {
    super();
    this.state = { products: [] };
    axios
      .get("https://itpro2017.herokuapp.com/api/products")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var products = this.state.products.map(item => {
      return (
        <ProductCard
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          photo={
            "https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        />
      );
    });
    return (
      <div className="container">
        <div className="row">{products}</div>
      </div>
    );
  }
}

export default ProductListContainer;
