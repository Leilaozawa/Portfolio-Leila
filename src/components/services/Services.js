import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          {/* End of UI/UX */}

        </ul>
        </article>
        <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          {/* End of Web Development */}

        </ul>
        </article>
        <article className='service'>
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
          </li>
          {/* End of Content Creation */}

        </ul>
        </article>
      </div>
    </section>
  )
}

export default Services