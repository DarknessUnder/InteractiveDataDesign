import React, { Component } from 'react';
import '../src/styles.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component {
  state = {
    navbarState: true,
    navbarClass: 'collapse navbar-collapse',
    menus: [
      {
        id: 1,
        text: 'Home',
        url: '/Home'
      },
      {
        id: 2,
        text: 'Cases',
        url: '/CasePage'
      },
      {
        id: 3,
        text: 'Symptoms',
        url: '/SymptomsPage'
      },
      {
        id: 4,
        text: 'Vaccine',
        url: '/VaccinePage'
      },
      {
        id: 5,
        text: 'Policies',
        url: '/PolicyPage'
      }
    ]
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme Nav">
        <link Rel="stylesheet" Href="../src/styles.css"></link>
        <ul className="navbar-nav ml-auto mr-5" styles={{ height: '100%' }}>
          {this.state.menus.map((menu) => {
            return (
              <div key={menu.id} className="nav-item">
                <Link to={menu.url} className="nav-link">
                  {menu.text}
                </Link>
              </div>
            );
          })}
        </ul>
      </nav>
    );
  }
}
