import axios from 'axios';
import React from 'react';
import { 
    Link,
    Route,
    Routes, 
    useNavigate } from 'react-router-dom';

//Import hooks
import useForm from "../../CustomHooks/useForm"


const CreatePoll = (props) => {
    let navigate = useNavigate();
    const { formValues, handleChange, handleSubmit } = useForm(create);

    function create() {
        let form = {
            title: formValues.title,
            options: [
                formValues.option1,
                formValues.option2,
                formValues.option3,
                formValues.option4
            ]
        }

        postNewPoll(form);
        navigate('/admin');
    }

    const postNewPoll = async (form) => {
        await axios
            .post('http://localhost:5003/api/polls/create', form, {
                headers: {
                    'x-auth-token' : localStorage.getItem('token')
                }
            })
            .then((res) => {
                console.log(res.data);
            })
    }

    return ( 
        <>
            <div>
                Create Poll
                <form className="register-user" onSubmit={handleSubmit}>
                    <div className="input-group mb-3" >
                        <span className="input-group-text" id="basic-addon3">Title: </span>
                        <input name='title' value={formValues.title} onChange={handleChange} type="text" className="form-control" aria-label="First Name" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon4">Option 1: </span>
                        <input name='option1' value={formValues.option1} onChange={handleChange} type="text" className="form-control" aria-label="Last Name" aria-describedby="basic-addon2" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon5">Option 2: </span>
                        <input name='option2' value={formValues.option2} onChange={handleChange} type="text" className="form-control" aria-label="New Email" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon6">Option 3: </span>
                        <input name='option3' value={formValues.option3} onChange={handleChange} type="text" className="form-control" aria-label="New Password" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon6">Option 4: </span>
                        <input name='option4' value={formValues.option4} onChange={handleChange} type="text" className="form-control" aria-label="New Password" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default CreatePoll;