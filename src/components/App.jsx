//Imports
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
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

//Class declaration
class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    //Functions

    //HTTP Requests

    //Lifecycle methods
    componentDidMount() {

    }

    //Render
    render() {
        return(
            <>
                <div>
                    Nav Bar
                </div>
       
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

                    <Route path='/user'
                        element={
                            <Login
                            
                            />
                        }/>
                </Routes> 
            </>    
        )
    }
}

export default App;