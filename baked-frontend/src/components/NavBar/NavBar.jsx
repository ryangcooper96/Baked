import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useUser from '../../hooks/useUser';
// import listing from "../../utils/listing"
import './NavBar.css';

const NavBar = () => {
  const { handleLogout, user } = useUser()
  // const [basket, setBasket] = useState([])

  // // OBTAIN USER BASKET
  //   useEffect(() => {
  //       async function getCart() {
  //           const userCart = await listing.getListingsInCartbyLoggedInUser()
  //           console.log("userCart: ", userCart)
  //           setBasket([...userCart])
  //       }
  //       getCart()
  //   }, [user])

  let nav = user ?
    <div className='NavBar'>

      <div>
        <NavLink to='/dashboard' className='NavBar-link'>
          <span className='NavBar-welcome'>Hi, {user.username} &nbsp;</span><span className="material-symbols-rounded">account_circle</span>
        </NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='' className='NavBar-link' onClick={handleLogout}>LOG OUT</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/basket' className='NavBar-link' >BASKET</NavLink>
      </div>
    </div>
    :
    <div className='NavBar'>
      <div>
        <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <NavLink to='/basket' className='NavBar-link' >BASKET</NavLink>
      </div>
    </div>
    ;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;