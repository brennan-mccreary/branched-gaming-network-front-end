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
import useForm from "../../CustomHooks/useForm"

//Stateless Functional Component
const Register = (props) => {
    let navigate = useNavigate();
    const { formValues, handleChange, handleSubmit } = useForm(register);

    //Register callback -- runs on handleSubmit
    function register() {
        postNewUser(formValues);

        navigate('/');
    }


    //HTTP Requests
    //POST New User
    const postNewUser = async (form) => {
        await axios
            .post('http://localhost:5003/api/users/register', form)
            .then((res) => {
                localStorage.setItem('token', res.headers['x-auth-token']);

                const decode = jwtDecode(localStorage.getItem('token'));

                props.setUser(decode);
            })
    }
    
    return ( 
        <>
            <div className='login-content'>
                <div className="login-content-box">
                    <h1 className='login-header'>Register now!</h1>
                    <form className="register-user" onSubmit={handleSubmit}>
                        <div className="input-group mb-3" >
                            <span className="input-group-text" id="basic-addon3">First Name: </span>
                            <input name='firstName' value={formValues.firstName} onChange={handleChange} type="text" className="form-control" aria-label="First Name" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon4">Last Name: </span>
                            <input name='lastName' value={formValues.lastName} onChange={handleChange} type="text" className="form-control" aria-label="Last Name" aria-describedby="basic-addon2" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon5">Email: </span>
                            <input name='email' value={formValues.email} onChange={handleChange} type="text" className="form-control" aria-label="New Email" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon6">Password: </span>
                            <input name='password' value={formValues.password} onChange={handleChange} type="password" className="form-control" aria-label="New Password" aria-describedby="basic-addon1" />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary login-btn">Register</button>
                        </div>
                    </form>
                </div>
        </div>
        </>
     );
}

//Export
export default Register;
