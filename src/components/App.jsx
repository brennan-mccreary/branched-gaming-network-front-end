//Imports
import React, {useState} from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

//Import Components/Pages
import Home from "../pages/Home/Home"
import Community from "../pages/Community/Community";
import Explore from "../pages/Explore/Explore";
import Roots from "../pages/Roots/Roots";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

//Stateless functional component
const App = () => {
    const [user, setUser] = useState(undefined);
    

    //Logout function
    const logout = () => {
        setUser(undefined);
        localStorage.clear();
    };

    return(
        <>
            {/* selectively render login/register/logout section based on user existence status */}
            {!user ? 
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-4 col-md-6">
                            <Link to='/user/login'> <button>Login</button> </Link>
                        </div>
                    </div>
                </div>
            :
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <span>{user.firstName + ' ' + user.lastName}</span>
                            <Link to='/'><button onClick={logout}>Logout</button></Link>
                        </div>
                    </div>
                </div>
            }
            
            {/* Routes for each main page */}
            <Routes>
                <Route exact path='/'
                    element={
                        <Home
                        
                        />
                    }/>

                <Route path='/explore'
                    element={
                        <Explore 
                        
                        />
                    }/>

                <Route path='/community'
                    element={
                        <Community 
                        
                        />
                    }/>

                <Route path='/roots'
                    element={
                        <Roots
                        
                        />
                    }/>

                <Route path='/user/login'
                    element={
                        <Login
                            user={user}
                            setUser={setUser}
                        />
                    }/>

                <Route path='/user/register'
                    element={
                        <Register
                            user={user}
                            setUser={setUser}
                        />
                    }/>
            </Routes> 
        </>    
    )
}


export default App;