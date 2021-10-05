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
            </div>

           <div className="mt-6">
           <Nav variant='pills' >
            <NavLink className='text-decoration-none  ms-5' activeStyle={activeStyle}  to="/home">Home</NavLink>
            <NavLink className='text-decoration-none  ms-5' activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink  className='text-decoration-none  ms-5' activeStyle={activeStyle} to="/Services">Services</NavLink>
            <NavLink  className='text-decoration-none ms-5 ' activeStyle={activeStyle}  to="/DietPlans" >Diet Plans</NavLink>
          </Nav>

           </div>
       </div>
    );
};

export default Header;