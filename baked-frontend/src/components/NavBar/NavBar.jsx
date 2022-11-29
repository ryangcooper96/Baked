import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import userService from "../../utils/userService"

// import listing from "../../utils/listing"
import './NavBar.css';

const NavBar = () => {
  const { handleLogout, user } = useUser()

  let nav = user ?
    <>
      <div className='secondaryLinks'>
        <NavLink to='/dashboard' className='NavBar-link'>
          <span className='NavBar-welcome'>Hi, {user.first_name}</span><span className="material-symbols-rounded">account_circle</span>
        </NavLink>
        <NavLink to='' className='NavBar-link' onClick={handleLogout}>
          <span>LOG OUT</span>
          {/* <span className="material-symbols-rounded">logout</span> */}
        </NavLink>
        <NavLink to='/basket' className='NavBar-link' >
          <span>BASKET</span>
          {/* <span className="material-symbols-rounded">shopping_cart</span> */}
        </NavLink>
      </div>
    </>
    :
    <>
      <div className='secondaryLinks'>
        <NavLink to='/login' className='NavBar-link'>
          <span>LOG IN</span>
        </NavLink>
        <NavLink to='/signup' className='NavBar-link'>
          <span>SIGN UP</span>
        </NavLink>
        <NavLink to='/basket' className='NavBar-link'>
          <span>BASKET</span>
        </NavLink>
      </div>
    </>
    ;

  return (
    <div className='NavBar'>
      <div className='mainLinks'>
        <NavLink to='/' className='NavBar-link NavBar-logo'>
          <img src='https://img.freepik.com/premium-vector/bakery-logo-template_441059-121.jpg?w=2000' alt=''/>
        </NavLink>
        <NavLink to='/results' className='NavBar-link' >
          <span>WHAT'S COOKIN?</span>
        </NavLink>
      </div>
      {nav}
    </div>
  );
};

export default NavBar;