//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes, 
    useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

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
            <>
                <h2>Welcome Back!</h2>
                <form className="login" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email: </span>
                        <input name='email' value={formValues.email} onChange={handleChange} type="text" className="form-control" aria-label="Email" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Password: </span>
                        <input name='password' value={formValues.password} onChange={handleChange}  type="password" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                    <h3>Don't Have an Account?</h3>
                    <li>
                        <Link to="/user/register">Register</Link>
                    </li>
                </div>
            </>
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
