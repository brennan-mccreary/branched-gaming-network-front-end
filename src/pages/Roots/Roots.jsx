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