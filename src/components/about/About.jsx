import React from 'react'
import '../../sass/about.scss'
import teamworkImg from '../../assets/teamwork.jpg'
import efcomImg from '../../assets/efcom.webp'
import timemanImg from '../../assets/timeman.jpg'

function About() {
  return (
    <>
    <div className='about'>
        <div className='about__skill1'>
            <p className='about__skill1__text'>TEAMWORK</p>
            <img className='about__skill1__img' src={teamworkImg} alt="" /> 
        </div>
        <div className='about__skill2'>
            <p className='about__skill2__text'>COMMUNICATION</p>
            <img className='about__skill2__img' src={efcomImg} alt="" />  
        </div>
        <div className='about__skill3'>
            <p className='about__skill3__text'>TIME-MANAGEMENT</p>
            <img className='about__skill3__img' src={timemanImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default About