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
      <div>
        <NavLink to='/dashboard' className='NavBar-link'>
          <span className='NavBar-welcome'>Hi, {user.first_name}</span><span className="material-symbols-rounded">account_circle</span>
        </NavLink>
          &nbsp;|&nbsp;
        <NavLink to='' className='NavBar-link' onClick={handleLogout}><span>LOG OUT</span><span className="material-symbols-rounded">logout</span></NavLink>
          &nbsp;|&nbsp;
        <NavLink to='/basket' className='NavBar-link' ><span>CART</span><span className="material-symbols-rounded"><span class="material-symbols-outlined">
shopping_cart
</span></span></NavLink>
      </div>
    </>
    :
    <>
      <div>
        <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <NavLink to='/basket' className='NavBar-link' >BASKET</NavLink>
      </div>
    </>
    ;

  return (
    <div className='NavBar'>
      <div>
        <NavLink to='/' className='NavBar-link NavBar-logo'>
          <img src='https://img.freepik.com/premium-vector/bakery-logo-template_441059-121.jpg?w=2000' alt=''/>
        </NavLink>
        <NavLink to='/results' className='NavBar-link' >RESULTS</NavLink>
      </div>
      {nav}
    </div>
  );
};

export default NavBar;