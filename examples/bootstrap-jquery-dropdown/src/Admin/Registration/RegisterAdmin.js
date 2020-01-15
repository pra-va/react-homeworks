import React, { Component } from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';
import RegisterAdminComponent from './RegisterAdminComponent';

class RegisterAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      username: '',
      password: '',
      history: props.history
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
    this.setState({
      [id]: value
    }
  );
};

handleClick = (event) => {
  const outputAdmin = {
    name: this.state.name,
    surname: this.state.surname,
    username: this.state.username,
    password: this.state.password
  };

  axios.post(API + "/api/admin/admins/new", outputAdmin)
  .then((response) => {
    this.setState( {
      name: '',
      surname: '',
      username: '',
      password: ''
    });
  })
  .catch((error) => {
    console.log(error);
  });
  event.preventDefault();
};
render(){
  return(
    <div>
      <RegisterAdminComponent
        name={this.state.name}
        surname={this.state.surname}
        username={this.state.username}
        password={this.state.password}
        onChange={this.handleChange}
        onClick={this.handleClick}
        history={this.state.history}
        />
    </div>
  );
}
}

export default RegisterAdmin;
