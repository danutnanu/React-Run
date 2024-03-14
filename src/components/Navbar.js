import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <div className="navbar-logo h1 mt-2 text-secondary" onClick={handleClick}>
            RUN
            <i className="fa-solid fa-person-running bg-warning rounded ms-2" />
          </div>

          {/* Hamburger Menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* Hamburger Menu */}

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item mt-2'>
              <a href='/#' className='nav-links text-secondary' onClick={closeMobileMenu}>Home</a>
            </li>
            <li className='nav-item mt-2'>
              <a href='/#run2022' className='nav-links text-secondary' onClick={closeMobileMenu}>Run 2022</a>
            </li>
            <li className='nav-item mt-2'>
              <a href='/#run2023' className='nav-links text-secondary' onClick={closeMobileMenu}>Run 2023</a>
            </li>
            <li className='nav-item mt-2 align-items-right'>
              <a href='/#run2024' className='nav-links text-secondary' onClick={closeMobileMenu}>Run 2024</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
