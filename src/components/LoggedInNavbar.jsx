import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import logo from '../pictures/logo.svg';
import SideBar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../features/userSlice";
import './styles/LoggedInNavbar.css'

const LoggedInNavbar =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
      }; 
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
            </div>
            <div className='profile-side'>
                <section className='section-profile'>
                    <form className='profile-form'>
                        <div className='form-profile-control'>
                            <Link to="/profile">
                            <FontAwesomeIcon icon={faUser} size="2x" />
                            </Link>
                               <FontAwesomeIcon onClick={handleLogout} icon={faSignOutAlt} size="2x" />
                        </div>
                    </form>
                </section>
            </div>
        </nav>
    )
}

export default LoggedInNavbar