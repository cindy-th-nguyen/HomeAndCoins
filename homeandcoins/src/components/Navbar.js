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
  handleToggle = async () => {
    console.log("start");
    const provider = new Web3Provider();
    await provider.init();
    provider.getAnnouncements();
    this.setState({ isOpen: !this.state.isOpen });
  };

  createAnnouncement = async () => {
    console.log("start");
    const provider = new Web3Provider();
    await provider.init();
    provider.createAnnouncement(1000, "homeTitle", "20 rue de Test", 100, "This is a Test House");
    this.setState({ isOpen: !this.state.isOpen });
  };

  buyAnnouncement = async () => {
    console.log("start");
    const provider = new Web3Provider();
    await provider.init();
    provider.buyAnnouncement(0,1000).send();
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
            >Get Annoucement</button>
            </li>
            <li>
            <button align="right" type="button" className="connect-button"
                onClick={this.createAnnouncement}
            >Create Annoucement</button>
            </li>
            <li>
            <button align="right" type="button" className="connect-button"
                onClick={this.buyAnnouncement}
            >Buy Annoucement</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
