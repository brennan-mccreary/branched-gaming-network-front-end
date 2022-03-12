//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';

//Import components/pages
import Mission from '../../components/Mission/Mission';
import ModeratorList from '../../components/ModeratorList/ModeratorList';
import OwnersList from '../../components/OwnersList/OwnersList';
import SocialMediaButtons from '../../components/SocialMediaButtons/SocialMediaButtons';

//Stateless functional component
const Roots = (props) => {
    return ( 
        <>

            {/* selectively render login/register/logout section based on props.user existence status */}
            {!props.user ? 
                <div>
                    <Link to='/user/login'><button>Login</button></Link>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/explore'><button>Explore</button></Link>
                    <Link to='/community'><button>Dashboard</button></Link>
                    <Link to='/roots'><button>About</button></Link>
                </div>
            :
                <div>
                    <span>{props.user.firstName + ' ' + props.user.lastName}</span>
                    <Link to='/'><button onClick={props.logout}>Logout</button></Link>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/explore'><button>Explore</button></Link>
                    <Link to='/community'><button>Dashboard</button></Link>
                    <Link to='/roots'><button>About</button></Link>
                    {props.user.isAdmin === true ? 
                    <Link to='/admin'><button>Admin Panel</button></Link>
                    :
                    null
                    }
                </div>
            }


            Roots
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Mission/>
                        <SocialMediaButtons/>
                    </div>
                    <div className="col-md-3">
                        Owners
                        <OwnersList/>
                    </div>
                    <div className="col-md-3">
                        Moderators
                        <ModeratorList/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Roots;