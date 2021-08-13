import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav>
                    <div className="main-nav">
                        <img src={window.location.origin + '/images/plugo.png'} alt="" className="logo"/>
                        <ul className="navigation-list">
                            <li className="navigation-item active">
                                Home
                            </li>
                            <li className="navigation-item">
                                How it Works
                            </li>
                            <li className="navigation-item">
                                Why Plugo
                            </li>
                            <li className="navigation-item">
                                Plans
                            </li>

                            <li className="navigation-item contact">
                                Contact Us
                            </li>

                            <li className="navigation-item download">
                                Download
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}

export default Navbar
