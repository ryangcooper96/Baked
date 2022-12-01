import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './ResultCard.css'

function ResultCard({ company }) {

//   useEffect(() => {

//   }, [company])
    
  return (
    <Link to={`/results/${company.id}`} style={{textDecoration: 'none'}}>
        <div className='ResultCard'>
            <div className="logoContainer">
                {company.logo_image ? <img src={company.logo_image.replace('upload/','upload/h_320,w_320,c_scale/')} alt='company logo'/> : <span>Logo</span>}
            </div>
            {/* <div className="heroContainer" style={{background: `url(${company.hero_image.replace('upload/','upload/h_80,w_72,c_scale/') ? company.hero_image : ''})`}}> */}
            <div className="heroContainer" >
                {company.hero_image ? <img src={company.hero_image.replace('upload/','upload/h_800,w_720,c_scale/')} alt='company hero'/> : <span>Hero</span>}
                <div className='heroBlur'></div>
                <h2>{company.name}</h2>
            </div>
            <div className="textContainer">
                <div className="statusContainer">
                <div className="reviews">
                    <span className='material-symbols-rounded'>star</span>
                    <span className='avg'>0.0</span>
                    &nbsp;
                    <span className='total'>&#40;0&#41;</span>
                </div>
                <div className="distance">
                    <span className='material-symbols-rounded'>near_me</span>
                    <span className='value'>0.0 km</span>
                </div>
                </div>
                {/* <div className="time">
                    <span className='material-symbols-rounded'>timer</span>
                    &nbsp;
                    <div>
                    <span className='value'>30-40</span>
                    <span className='units'>MINS</span>
                    </div>
                </div> */}
                <p className='description'>{company.description}</p>
            </div>
        </div>
    </Link>
  )
}

export default ResultCard