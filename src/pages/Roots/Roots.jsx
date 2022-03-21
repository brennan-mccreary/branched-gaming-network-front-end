//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';

//Import components/pages
import Mission from '../../components/Mission/Mission';
import ModeratorList from '../../components/ModeratorList/ModeratorList';
import NavBar from '../../components/NavBar/NavBar';
import OwnersList from '../../components/OwnersList/OwnersList';
import SocialMediaButtons from '../../components/SocialMediaButtons/SocialMediaButtons';

//Stateless functional component
const Roots = (props) => {
    return ( 
        <>
            <NavBar 
                user={props.user}
                setUser={props.setUser}
                logout={props.logout}
            />

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Mission/>
                        <SocialMediaButtons/>
                    </div>
                    <div className="col-md-4">
                        <OwnersList/>
                        
                    </div>
                    <div className="col-md-4">
                        
                        <ModeratorList/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Roots;