import React, { Component } from "react";
import EditItemPresentation from "../EditItemPresentation/EditItemPresentation";
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
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    axios
      .get(
        "https://itpro2017.herokuapp.com/api/products/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState(response.data);
      })
      .catch(error => console.log(error));
  };

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

  idChangedHandler = event => {
    event.preventDefault();
    this.setState({
      id: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .put(
        "https://itpro2017.herokuapp.com/api/products/" +
          this.props.match.params.id,
        {
          description: this.state.description,
          id: this.state.id,
          image: this.state.image,
          price: this.state.price,
          quantity: this.state.quantity,
          title: this.state.title
        }
      )
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
        <EditItemPresentation
          submitHandler={this.submitHandler}
          imageChangedHandler={this.imageChangedHandler}
          titleChangedHandler={this.titleChangedHandler}
          descriptionChangedHandler={this.descriptionChangedHandler}
          priceChangedHandler={this.priceChangedHandler}
          quantityChangedHandler={this.quantityChangedHandler}
          idChangedHandler={this.idChangedHandler}
          title={this.state.title}
          image={this.state.image}
          price={this.state.price}
          quantity={this.state.quantity}
          description={this.state.description}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default NewItemContainer;
