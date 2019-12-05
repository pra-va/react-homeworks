import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNavBar extends Component {

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Meniu <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/admin/register/admin"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Administratorius</Link></li>
                  <li><Link to="/admin/register/doctor"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Gydytojas</Link></li>
                  <li><Link to="/admin/register/patient"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Pacientas</Link></li>
                  <li><Link to="/admin/register/pharmacist"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Vaistininkas</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="admin/assign"><span className="glyphicon glyphicon-random" aria-hidden="true"></span> Paciento priskirimas</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/admin/admins"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Administratorių sąrašas</Link></li>
                  <li><Link to="/admin/patients"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Pacientų sąrašas</Link></li>
                  <li><Link to="/admin/doctors"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Gydytojų sąrašas</Link></li>
                  <li><Link to="/admin/pharmacists"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Vaistininkų sąrašas</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/admin/changePassword">Keisti slaptažodį</Link></li>
                  <li><Link to="/">Atsijungti</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;
