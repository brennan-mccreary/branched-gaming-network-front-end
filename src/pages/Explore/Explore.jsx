//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';

//Import components/pages
import PartnersList from '../../components/PartnersList/PartnersList';

//Stateless functional component
const Explore = (props) => {
    return ( 
        <>
            Explore
            <PartnersList/>
        </>
    );
}
 
export default Explore;