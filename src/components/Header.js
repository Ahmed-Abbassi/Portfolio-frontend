/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const hideDrawer = () => setVisible(false);
  const showDrawer = () => setVisible(true);

  return (
    <div>
      <header>
        <h2>Ahmed.dev</h2>

        <div id='home' className="navList">
          <a href='#home'
            className="navigation"  
            onClick={() => navigate("/")}
           
          >
            Home
          </a>

          <a className="navigation" onClick={() => navigate("/")} href='#about'>About</a>
          <a className="navigation" onClick={() => navigate("/")} href='#projectsList'>Projects</a>
          <a className="navigation" onClick={() => navigate("/")} href='#contact'>Contact</a>
        </div>

        <h3 id='drawer' onClick={showDrawer}>
          <FontAwesomeIcon size='lg' icon={faBars} />
        </h3>

        <div className={`drawerContent ${visible ? 'drawerVisible' : 'drawerInvisible'}`}>
          <div className='drawerLinks'>
            <div id='drawerXIcon' onClick={hideDrawer}>
              <FontAwesomeIcon size='lg' icon={faXmark} />
            </div>

            <a onClick={hideDrawer} className="navigation" href='#home'>Home</a>
            <a onClick={hideDrawer} className="navigation" href='#about'>About</a>
            <a onClick={hideDrawer} className="navigation" href='#projectsList'>Projects</a>
            <a onClick={hideDrawer} className="navigation" href='#contact'>Contact</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
