import React from 'react'
import './Landing.css'
import flash from './../../Images/Kid-Flash-PNG-Free-Download.png'
import Typewriter from 'typewriter-effect';

const Landing = () => {
  return (
    <div className='landing-container'>
        <div className="landing-left" data-aos="fade-right">
            <h1 className='landing-header'>Can you type...</h1>
            <div className="typewriter-container">
            <Typewriter
                 options={{
                    strings: ['Fast?', 'Correct?', 'Quick?'],
                    autoStart: true,
                    loop: true,
                }}
                
            />
            </div>
        </div>
        <div className='landing-right'>
            <img className='flash-hero' data-aos="fade-left" src={flash} alt='flash-hero' />
        </div>
    </div>
  )
}

export default Landing