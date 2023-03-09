import React from 'react';

function Header() {
  return (
    <header>
    <div id="header-title">
        <h1><a href="/" id="logo">Golden Beauty</a></h1>
    </div>

    <nav id="dropdown-main">
        <ul className="home-dropdown">
            <li className="dropdown-logo"><i className="fas fa-bars"></i>
                <ul className="dropdown-content">
                    <li><a href="/home2">Home</a></li>
                    <li className="services-dropdown"><a href="#services">Services</a><i className="fa fa-caret-down"></i>
                        <ul className="sub-dropdown">
                            <li><a href="/nails">Nails</a></li>
                            <li><a href="/waxing">Waxing</a></li>
                            <li><a href="/relaxation">Relaxation</a></li>
                        </ul>
                    </li>
                    <li><a href="/home2#about-us">About Us</a></li>
                    <li><a href="/home2#location">Location</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>

  )
}

export default Header
