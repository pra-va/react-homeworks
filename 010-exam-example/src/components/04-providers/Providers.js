import React, { Component } from "react";
import Table from "./Table/Table";
import axios from "axios";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { providers: [] };
  }

  refreshComponents = () => {
    axios
      .get("http://localhost:8080/backspace-perlaikymo-app/api/provider")
      .then(response => {
        if (response.data.length !== this.state.providers.length) {
          this.setState({ providers: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.refreshComponents();
  }

  // provider prop i kiekviena table

  render() {
    if (this.state.providers.length > 0) {
      var providerTables = this.state.providers.map((item, index) => {
        return <Table key={index} provider={item.namel} />;
      });
    }

    return <div className="container">{providerTables}</div>;
  }
}

export default HomeComponent;
