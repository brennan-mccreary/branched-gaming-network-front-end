//Imports
import userEvent from '@testing-library/user-event';
import React from 'react';
import { 
    Link,
    Route,
    Routes, 
    useNavigate } from 'react-router-dom';
import './Admin.css';

//Import Components/Pages
import RemovePartner from '../../components/RemovePartner/RemovePartner';
import AddPartner from '../../components/AddPartner/AddPartner';
import CreatePoll from '../../components/CreatePoll/CreatePoll';
import NavBar from '../../components/NavBar/NavBar';

//Stateless functional component
const Community = (props) => {

    return ( 
        <>
           {props.user === undefined || props.user === false ?
            <div>
                Admin Access Only
            </div>
           :
           <div>
                <NavBar 
                    user={props.user}
                    setUser={props.setUser}
                    logout={props.logout}
                />
                
                <div className="container">
                    <div className="row row-spacer">
                        <div className="col-md-6">
                            <CreatePoll/>
                        </div>
                        <div className="col-md-6">
                            <AddPartner/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sx-12">
                            <RemovePartner/>
                        </div>
                    </div>
                </div>    
           </div>
           }

                
        </>
     );
}

//Exports
export default Community;