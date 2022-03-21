//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes, 
    useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './Login.css';

//Import components/pages

//Import hooks
import useForm from "../../CustomHooks/useForm";

//Stateless Functional Component
const Login = (props) => {
    let navigate = useNavigate();
    const { formValues, handleChange, handleSubmit } = useForm(login);

    //Login callback -- runs on handleSubmit
    function login() {
        postExistingUser(formValues);
        navigate('/');
    };

    //HTTP Requests
    //POST Existing User
    const postExistingUser = async (form) => {
        await axios
            .post('http://localhost:5003/api/auth/', form)
            .then((res) => {
                localStorage.setItem("token", res.data);

                const decode = jwtDecode(localStorage.getItem('token'));

                props.setUser(decode);
            })
    }


    return (
        <>
        {!props.user ? 
            <div className="login-content">
                <div className="login-content-box">
                    <h1 className='login-header'>Welcome Back!</h1>
                    <form className="" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email: </span>
                            <input name='email' value={formValues.email} onChange={handleChange} type="text" className="form-control"/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Password: </span>
                            <input name='password' value={formValues.password} onChange={handleChange}  type="password" className="form-control"/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success login-btn">Login</button>
                        </div>
                    </form>
                    <div>
                        <h5 className='login-footer'>Don't Have an Account? <Link to="/user/register">Register</Link></h5> 
                    </div>
                </div>
                
            </div>
        : 
            <>
                You're already logged in, guber
            </>
        }
        </>
     );
}

//Export
export default Login;
