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
        localStorage.removeItem("user");
        localStorage.removeItem("token");
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
                            <Link to="/cart">
                             <svg className='nav-page__cart-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                             </svg>
                            </Link>
                            <Link to="/profile">
                            <FontAwesomeIcon className='nav-page__profile-icon' icon={faUser} size="2x" />
                            </Link>
                               <FontAwesomeIcon className='nav-page__signOut-icon'  onClick={handleLogout} icon={faSignOutAlt} size="2x" />
                        </div>
                    </form>
                </section>
            </div>
        </nav>
    )
}

export default LoggedInNavbar