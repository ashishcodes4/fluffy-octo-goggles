import React, { Component } from "react";
import "./Header.css";

export default class Header_ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark covid-custom-navbar">
        <div className="navbar-brand">
          <span className="green">
            COVID<span className="red"> 19</span>
          </span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                Link
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <div className="dropdown-item" href="#">
                  Action
                </div>
                <div className="dropdown-item" href="#">
                  Another action
                </div>
                <div className="dropdown-item" href="#">
                  Something else here
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}