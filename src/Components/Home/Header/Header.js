import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import css from './Header.css'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <div class="container-fluid">
         <img  class="img-responsive" src={logo} alt=""/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link class="nav-link" to="">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="">Our Team</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="">Contact Us</Link>
              </li>
              <li class="nav-item"> 
               <Link to="/login">
                       <button className='btn btn-dark' renderAs="button">
                          <span>Login</span>
                         </button>
              </Link>
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;