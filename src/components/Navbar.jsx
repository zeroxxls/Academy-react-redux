import React from 'react';
import { Link } from 'react-router-dom'
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
                        <div className='logo-name'><Link to='/'>DevTalk Academy</Link></div>
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
            </div>
            <div className='login-side'>
                <section className='section-login'>
                    <form className='login-form'>
                        <div className='form-login-control'>
                            <Link to="/loginpage">
                                <button className='login-btn'>Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className='Sign-up-btn'>Sign Up</button>
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        </nav>
    )
}

export default Navbar