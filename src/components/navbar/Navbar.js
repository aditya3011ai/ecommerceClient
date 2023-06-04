import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import {BsCart2} from 'react-icons/bs'
const Navbar = () => {
  return (
    <nav className='NavBar'>
      <div className='container nav-container'>
      <div className='nav-left'>
        <ul className='link-group'>
          <li className='hover'>
            <Link className='link' to='/products?categories=comic'>Comics</Link>
          </li>
          <li className='hover'>
          <Link className='link'to='/products?categories=shows'>TV Shows</Link>
          </li>
          <li className='hover'>
          <Link className='link' to='/products?categories=sports'>Sports</Link>
          </li>
        </ul>
      </div>
      <div className='nav-center'>
      <Link to='/'><h1 className='banner'>PosterZ.</h1></Link>
      </div>
      <div className='nav-right'>
        <BsCart2 className='icon'/>
        <span className='cart-count center'>9</span>
      </div>
      </div>
    </nav>
  )
}

export default Navbar