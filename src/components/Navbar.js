import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">

                    <div className="navbar-logo h1" onClick={handleClick}>
                        RUN
                        <i class="fa-solid fa-person-running bg-danger rounded ms-2" />
                    </div>

                    {/* Hamburger Menu */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/* Hamburger Menu */}

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item mt-2'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item mt-2'>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                2022
                            </Link>
                        </li>
                        <li className='nav-item mt-2'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                2023
                            </Link>
                        </li>
                        <li className='nav-item mt-2 align-items-right'>
                            <Link
                                to='/sign-up'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                2024
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;