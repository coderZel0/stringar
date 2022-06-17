import React from 'react';
import './navbar.css';

const Navbar = ()=>{

    return<>
        <div className="navbar">
            <div className='navbar__inner'>
                <div className='navbar__links__container'>
                    <div className='logo__container'>
                        <div className='trademark'>T</div>
                        <div className='logo'>
                            <h1>STRINGAR</h1>
                        </div>
                    </div>
                   
                    <div className='navbar__links'>
                        <ul>
                            <li>Home</li>
                            <li>Games</li>
                            <li>Explore</li>
                            <li>User Guide</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='navbar__user-details'>
                    <div className='user__inner'>
                        <div className='email_logo_container'>
                            <div className='email_logo'>
                                <strong>U</strong>
                            </div>
                        </div>
                        <div className='user_container'>
                            <div className='user'>Username</div>
                            <div className='points'>100pts</div>
                        </div>
                        <div className='user_pic'>
                            <img src="#" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    
}

export default Navbar;