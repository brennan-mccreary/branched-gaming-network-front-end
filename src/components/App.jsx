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
import Admin from "../pages/Admin/Admin";
import EditPoll from './EditPoll/EditPoll';
//Stateless functional component
const App = () => {
    const [user, setUser] = useState(undefined);
    const [pollId, setPollId] = useState(undefined);

    //Logout function
    const logout = () => {
        setUser(undefined);
        localStorage.clear();
    };

    return(
        <>
            
            
            {/* Routes for each main page */}
            <Routes>
               
                <Route exact path='/community/edit-poll' element={<EditPoll pollId={pollId} setPollId={setPollId}/>}></Route>
             

                <Route exact path='/'
                    element={
                        <Home
                            user={user}
                            setUser={setUser}
                            logout={logout}
                        />
                    }/>

                <Route path='/explore'
                    element={
                        <Explore 
                            user={user}
                            setUser={setUser}
                            logout={logout}
                        />
                    }/>

                <Route path='/community'
                    element={
                        <Community 
                            user={user}
                            setUser={setUser}
                            logout={logout}
                            pollId={pollId} 
                            setPollId={setPollId}
                        />
                    }/>

                <Route path='/roots'
                    element={
                        <Roots
                            user={user}
                            setUser={setUser}
                            logout={logout}
                        />
                    }/>

                <Route path='/user/login'
                    element={
                        <Login
                            user={user}
                            setUser={setUser}
                            logout={logout}
                        />
                    }/>

                <Route path='/user/register'
                    element={
                        <Register
                            user={user}
                            setUser={setUser}
                            logout={logout}
                        />
                    }/>
                
                <Route exact path='/admin'
                    element={
                        <Admin
                            user={user}
                            setUser={setUser}
                            logout={logout}
                        />
                    }/>
            </Routes> 
        </>    
    )
}


export default App;