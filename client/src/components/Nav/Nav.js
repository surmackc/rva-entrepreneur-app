import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';


const Nav = (props) => (
  <div className="container-flex">
    <nav className="navbar navbar-expand-l navbar-custom mb-3">
      <Link to="/" className="navbar-brand">
        <span> RVA Entrepreneur </span>
      </Link>
      
      <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

      </div>



    </nav>
  </div>
);

export default Nav;