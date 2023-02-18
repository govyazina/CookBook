import React from 'react';

function Header() {
    return (
        <header>
            <nav className="brown darken-2">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><img src="./assets/logo/logo.png" alt="logo is cook book"/></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/login">login</a></li>

                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#">login</a></li>
            </ul>
        </header>
    );
}

export default Header;