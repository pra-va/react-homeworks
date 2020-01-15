import React, { Component } from 'react';
import axios from 'axios';
import AdminDetailsComponent from './AdminDetailsComponent';
import {API} from '../ApiUrl';

class AdminDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      admin: {}
    };

  }
  componentDidMount() {
    axios.get(API + "/api/admins/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        admin: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

  };


  render(){
    return(
        <AdminDetailsComponent admin={this.state.admin} history={this.props.history}/>
    );
  }
}

export default AdminDetailsContainer;
