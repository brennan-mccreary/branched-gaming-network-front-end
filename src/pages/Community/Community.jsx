//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';
import CalendarView from '../../components/CalendarView/CalendarView';
import PollsList from '../../components/PollsList/PollsList';

//Stateless functional component
const Community = (props) => {
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

            
            Community
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-5 col-lg-4">

                    </div>
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        {/* <CalendarView/> */}
                    </div>
                    <div className="col-lg-3">
                        <PollsList
                            user={props.user}
                            setUser={props.setUser}
                            logout={props.logout}
                            pollId={props.pollId} 
                            setPollId={props.setPollId}
                        />
                    </div>
                </div>
            </div>
        </>
     );
}

//Exports
export default Community;