import React, { Component } from 'react'
import logo from '../assets/logo.png'
import Hire from './HireMe'

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">
    <img src={logo} alt="logo" width='80'></img>
    <span className="logo-text">Maru25</span>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="justify-content-end navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/portifolio">Portifolio</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/resume">Resume</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="nav-item active">
       <Hire/>
      </li>
     
    </ul>
  </div>
</nav>
      </div>
    )
  }
}

export default Navigation
