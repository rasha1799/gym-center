import React from 'react';
import { Nav } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Header.css'



const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
   
    return (
       <div className='nav'>
                <div><h1>
            Fit and Lift Gym Center
            </h1>
            <h3>All progress takes place outside the comfort zone.</h3></div>

           <div>
           <Nav variant='pills'>
            <NavLink className='nav-link' activeStyle={activeStyle}  to="/home">Home</NavLink>
            <NavLink  className='nav-link' activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink  className='nav-link' activeStyle={activeStyle} to="/Services">Services</NavLink>
            <NavLink  className='nav-link' activeStyle={activeStyle}  to="/DietPlans" >Diet Plans</NavLink>
          </Nav>

           </div>
       </div>
    );
};

export default Header;