import React, { useEffect, useState } from 'react'
import company from "../../utils/company"
// import useUser from '../../hooks/useUser';

import './HomePage.css'

function HomePage() {

  // const { handleLogout, user } = useUser()

  return (
    <div className='HomePage'>
      <div className='heroWrapper'>
        <div className='heroWelcome'>
          <h2>Welcome to</h2>
          <h1>Baked</h1>
        </div>
        <div className='heroSearch'>
          <h3>What's cookin' near you?</h3>
          <div className="searchContainer">
            <input type="text" placeholder='Enter your Postcode'></input>
            <button><span className="material-symbols-rounded">search</span></button>
          </div>
        </div>
        <div className="heroPanel">
          <h3>Dough to Door</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere accusamus, voluptates maxime, perferendis laborum totam praesentium deserunt sapiente sequi at laboriosam commodi quis incidunt ad aspernatur odit? Quisquam, totam?</p>
        </div>
      </div>
      <div className='featured'></div>
        {company ? company.name : null}
    </div>
  )
}

export default HomePage