import React from 'react';
import { useEffect } from 'react';
import logo from '../pictures/logo.svg';
import './styles/Navbar.css';
import SideBar from './SideBar';

const Navbar =()=>{
    return(
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <div className='nav-logo'>
                        <img src={logo} alt='logo'/>
                        <div className='logo-name'>ACADEMY</div>
                    </div>
                </div>
                <div className='link-container'>
                    <SideBar/>
                </div>
                <div className='dropdown'>
                    <button className='dropdown-btn'>Language</button>
                        <div className='dropdown-content'>
                            <button>English</button>
                            <button>German</button>
                            <button >Russian</button>
                            <button>Ukrainian</button>
                        </div>
                </div>
            </div>
            <div className='nav-side'>
             <section className="section-search">
                <form className="search-form">
                    <div className="form-control">
                        <input type="text" id="name" placeholder="Search..."/>
                        <button className="search-btn">Search</button>
                    </div>
                </form>
             </section>
            </div>
            <div className='login-side'>
                <section className='section-login'>
                    <form className='login-form'>
                        <div className='form-login-control'>
                            <button className='login-btn'>Login</button>
                            <button className='Sign-up-btn'>Sign Up</button>
                        </div>
                    </form>
                </section>
            </div>
        </nav>
    )
}

export default Navbar