import React from 'react';
import "./mystyles.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Tournament() {
  return (
    <div className='tourney-main'>
      <Helmet>
        <title>GECT Chess Club - Tournaments</title>
      </Helmet>
        <div className='t-header'>
          <Link to="/" className='t-header-link'>GECT Chess Club</Link>
          <h1>18th July Arena</h1>
        </div>
        <div className='winners'>
          <div className='winnerDisplay'>
              <div className='winner1 winner-flex'>
                <div className='circle1'>
                  1st
                </div> 
                <p>Anirudh P</p>           
              </div>
              <div className='winner2 winner-flex'>
                <div className='circle2'>
                    2nd
                </div>
                <p>Henock Peter</p>
              </div>
              <div className='winner3 winner-flex'>
                <div className='circle3'>
                    3rd
                </div>
                <p>Ananthapadmanaban</p>
              </div>
              <div className='winner4 winner-flex'>
                <div className='circle3'>
                    4th
                </div>
                <p>Krishnaprasad PP</p>
              </div>
              <div className='winner5 winner-flex'>
                <div className='circle3'>
                    5th
                </div>
                <p>djhonze</p>
              </div>
          </div>
        </div>
    </div>
  )
}
