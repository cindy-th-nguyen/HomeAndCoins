import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/logo.svg';
import {Web3Provider} from "../Web3Provider";
import {ContractABI} from "../ContractAbi";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    console.log("start");
    const provider = new Web3Provider();
    provider.helloWorld();
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="saleLogo" src={logo} alt="House Sale" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Houses</Link>
            </li>
            <li>
              <Link to="/sell">Sell</Link>
            </li>
            <li>
            <button align="right" type="button" className="connect-button"
                onClick={this.handleToggle}
            >MetaMask Connect</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
