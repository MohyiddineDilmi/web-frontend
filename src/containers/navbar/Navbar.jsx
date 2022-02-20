import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assests/logo.svg';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
  <Link to='/'>
    <p><a href='#Home'>Home</a></p>
  </Link>
  <p><a href='#Team'>Our Team</a></p>
  <p><a href='#Products'>Products</a></p>
  <p><a href='#Products'>Sign in</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='sh__navbar'  id='Home'>
      <div className='sh__navbar-links'>

        <div className='sh__navbar-links_logo'>
          <img src= { logo } alt="logo"/>
        </div>

        <div className='sh__navbar-links_container_right'>
          <div className='sh__navbar-be_partner'>
              <button type='button'>Be Partner</button>
          </div>

          <div className='sh__navbar-links_container'>
            <Menu />
          </div>
        </div>

        
        {/* Mobile view */} 

        <div className='sh__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#FFFFFF' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#FFFFFF' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='sh__navbar-menu_container scale-up-center'>
              <div className='sh__navbar-menu_container_links'>
                <Menu />
              </div>
              <div className='sh__navbar-menu_container_be_partner'>
                <button type='button'>Be Partner</button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Navbar