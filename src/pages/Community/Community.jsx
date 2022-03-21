//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';
import CalendarView from '../../components/CalendarView/CalendarView';
import PollsList from '../../components/PollsList/PollsList';
import NavBar from '../../components/NavBar/NavBar';
import './Community.css';
import SocialMediaButtons from '../../components/SocialMediaButtons/SocialMediaButtons';

//Stateless functional component
const Community = (props) => {
    return ( 
        <div className='community-container'>
            <NavBar 
                user={props.user}
                setUser={props.setUser}
                logout={props.logout}
            />

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-8">
                        <CalendarView/>
                        <SocialMediaButtons/>
                    </div>
                    <div className="col-sm-12 col-md-4">
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
        </div>
     );
}

//Exports
export default Community;