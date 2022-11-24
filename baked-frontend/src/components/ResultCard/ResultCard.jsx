import React from 'react'

import './ResultCard.css'

function ResultCard({ company }) {
  return (
    <div className='ResultCard'>
        <div className="logoContainer">
            <img src='https://img.freepik.com/premium-vector/bakery-logo-template_441059-121.jpg?w=2000' alt='company logo'/>
        </div>
        <div className="heroContainer">
            <div className='heroBlur'>
            </div>
            <h2>{company.name}</h2>
        </div>
        <div className="textContainer">
            <div className="statusContainer">
            <div className="reviews">
                <span className='material-symbols-rounded'>star</span>
                <span className='avg'>4.7</span>
                &nbsp;
                <span className='total'>&#40;34&#41;</span>
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
            <p>{company.description}</p>
        </div>
    </div>
  )
}

export default ResultCard