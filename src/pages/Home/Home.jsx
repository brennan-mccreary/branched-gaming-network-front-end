//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';

//Import components/pages


//Stateless functional component
const Home = (props) => {
    return ( 
        <>
            {/* selectively render login/register/logout section based on props.user existence status */}
            {!props.user ? 
                <div>
                    <Link to='/user/login'><button>Login</button></Link>
                </div>
            :
                <div>
                    <span>{props.user.firstName + ' ' + props.user.lastName}</span>
                    <Link to='/'><button onClick={props.logout}>Logout</button></Link>
                    {props.user.isAdmin === true ? 
                    <Link to='/admin'><button>Admin Panel</button></Link>
                    :
                    null
                    }
                </div>
            }


            Home

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div>
                            card 1
                        </div>
    
                        <Link to='explore'>
                            <button>Explore Creators</button>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <div>
                            card 2
                        </div>

                        <Link to='community'>
                            <button>Community Dashboard</button>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <div>
                            card 3
                        </div>
                        
                        <Link to='roots'>
                            <button>Our Roots</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>


     );
}
 
//Export
export default Home;