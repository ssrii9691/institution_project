import React from "react";
import logo from './assets/logo.jpg'
import "../App.css"
import { FaSignOutAlt } from "react-icons/fa";

const Fnavbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-md bg-body-tertiary ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{width:100}}  id="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center  justify-content-md-end "
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold ">
            <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Curriculum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mentors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <FaSignOutAlt/>Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Fnavbar;
