//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';
import './Explore.css';

//Import components/pages
import PartnersList from '../../components/PartnersList/PartnersList';
import NavBar from '../../components/NavBar/NavBar';

//Stateless functional component
const Explore = (props) => {
    return ( 
        <div className='explore-container'>

            <NavBar 
                user={props.user}
                setUser={props.setUser}
                logout={props.logout}
            />
            
            <PartnersList/>
        </div>
    );
}
 
export default Explore;