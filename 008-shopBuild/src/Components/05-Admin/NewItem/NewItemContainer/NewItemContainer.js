import React, { Component } from "react";
import NewItemPresentation from "./../NewItemPresentation/NewItemPresentation";
import axios from "axios";

class NewItemContainer extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      title: "",
      description: "",
      price: "",
      quantity: "",
      id: -1
    };

    axios
      .get("https://itpro2017.herokuapp.com/api/products")
      .then(response => {
        this.setState({ id: response.data.length + 1 });
      })
      .catch(error => console.log(error));
  }

  imageChangedHandler = event => {
    event.preventDefault();
    this.setState({
      image: event.target.value
    });
  };

  titleChangedHandler = event => {
    event.preventDefault();
    this.setState({
      title: event.target.value
    });
  };

  descriptionChangedHandler = event => {
    event.preventDefault();
    this.setState({
      description: event.target.value
    });
  };

  priceChangedHandler = event => {
    event.preventDefault();
    this.setState({
      price: event.target.value
    });
  };

  quantityChangedHandler = event => {
    event.preventDefault();
    this.setState({
      quantity: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("https://itpro2017.herokuapp.com/api/products", {
        description: this.state.description,
        id: this.state.id,
        image: this.state.image,
        price: this.state.price,
        quantity: this.state.quantity,
        title: this.state.title
      })
      .then(() => {
        this.props.history.push("/admin/list");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <NewItemPresentation
          submitHandler={this.submitHandler}
          imageChangedHandler={this.imageChangedHandler}
          titleChangedHandler={this.titleChangedHandler}
          descriptionChangedHandler={this.descriptionChangedHandler}
          priceChangedHandler={this.priceChangedHandler}
          quantityChangedHandler={this.quantityChangedHandler}
          title={this.state.title}
          image={this.state.image}
          price={this.state.price}
          quantity={this.state.quantity}
        />
      </div>
    );
  }
}

export default NewItemContainer;
