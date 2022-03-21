import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return ( 
        <div className='nav-container'>
            {!props.user ? 
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <a href='/' className="navbar-brand nav-header nav-icon-wrapper"><img className='nav-icon' src="https://static.wixstatic.com/media/f49e15_bef77944190a4e0a830c6b6be4065caa~mv2.png/v1/crop/x_0,y_35,w_715,h_614/fill/w_132,h_113,al_c,usm_0.66_1.00_0.01,enc_auto/Logo_NEW.png" alt="bgn icon" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/'><p className="nav-link">Home</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/explore'><p className="nav-link">Explore</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/community'><p className="nav-link">Dashboard</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/roots'><p className="nav-link">Our Roots</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/user/login'><p className="nav-link">Login</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            :
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <a href='/' className="navbar-brand nav-header nav-icon-wrapper"><img className='nav-icon' src="https://static.wixstatic.com/media/f49e15_bef77944190a4e0a830c6b6be4065caa~mv2.png/v1/crop/x_0,y_35,w_715,h_614/fill/w_132,h_113,al_c,usm_0.66_1.00_0.01,enc_auto/Logo_NEW.png" alt="bgn icon" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/'><p className="nav-link">Home</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/explore'><p className="nav-link">Explore</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/community'><p className="nav-link">Dashboard</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/roots'><p className="nav-link">Our Roots</p></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/'><p className='nav-link' onClick={props.logout}>Logout</p></Link>
                                    </li>
                                    {props.user.isAdmin === true ? 
                                    <li className="nav-item">
                                        <Link className='nav-btn' to='/admin'><p className='nav-link'>Admin Panel</p></Link>
                                    </li>
                                    :
                                    null
                                    }
                                </ul>
                                <span className="navbar-text">
                                    {props.user.firstName + ' ' + props.user.lastName}
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            }









            
        </div>



     );
}
 
export default NavBar;