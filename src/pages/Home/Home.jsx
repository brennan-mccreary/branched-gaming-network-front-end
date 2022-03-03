//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';

//Import components/pages
import Community from "../Community/Community";
import Explore from "../Explore/Explore";
import Roots from "../Roots/Roots";

//Stateless functional component
const Home = (props) => {
    return ( 
        <>
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