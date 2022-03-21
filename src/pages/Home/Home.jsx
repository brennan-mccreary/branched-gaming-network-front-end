//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';
import './Home.css';

//Stateless functional component
const Home = (props) => {
    return ( 
        <div className='home-container home-bg'>
            {/* selectively render login/register/logout section based on props.user existence status */}
            {!props.user ? 
                <div className='nav-button-content'>
                    <Link to='/user/login'><button className='btn btn-success nav-button'>Login</button></Link>
                </div>
            :
                <div className='nav-button-content'>
                    <span className='nav-user-info'>{props.user.firstName + ' ' + props.user.lastName}</span>
                    <Link to='/'><button className='btn btn-success nav-button' onClick={props.logout}>Logout</button></Link>
                    {props.user.isAdmin === true ? 
                    <Link to='/admin'><button className='btn btn-success nav-button'>Admin Panel</button></Link>
                    :
                    null
                    }
                </div>
            }

            <div className="container">
                <div className="row">
                    <div className="col-sm-4  img-cards-container">
                        <div className='img-cards'>
                            <Link to='explore'>
                                <img className='img-cards-home' src={require("../../images/BGN-Explore.png")} alt="Explore Creators" />
                            </Link>
                        </div> 
                    </div>
                    <div className="col-sm-4  img-cards-container">
                        <div className='img-cards'>
                            <Link to='community'>
                                <img className='img-cards-home' src={require("../../images/BGN-Community.png")} alt="Explore Creators" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4  img-cards-container">
                        <div className='img-cards'>
                            <Link to='roots'>
                                <img className='img-cards-home' src={require("../../images/BGN-Roots.png")} alt="Explore Creators" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


     );
}
 
//Export
export default Home;