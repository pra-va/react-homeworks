import React, { Component } from "react";
import Card from "./../Card/CardPresentationComponent";
import axios from "axios";

class CardsContainer extends Component {
  constructor() {
    super();
    this.state = { products: [] };
    axios
      .get("http://localhost:8080/shop/api/products")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var products = this.state.products.map((item, index) => {
      return (
        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
          <Card
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        </div>
      );
    });
    return <div className="row">{products}</div>;
  }
}

export default CardsContainer;
