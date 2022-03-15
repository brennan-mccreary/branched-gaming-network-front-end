import axios from 'axios';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../../CustomHooks/useForm';

const EditPoll = (props) => {
    
    const navigate = useNavigate();
    const { formValues, handleChange, handleSubmit } = useForm(callback);

    function callback() {
        let title = {title: formValues.title}
        putNewPollTitle(props.pollId, title);
    }

    //HTTP Request
    //PUT New Poll Title
    const putNewPollTitle = async(id, title) => {
        await axios
            .put(`http://localhost:5003/api/polls/edit/${id}`, title, {
                headers: {
                    'x-auth-token' : localStorage.getItem('token')
                }
            })
            .then(navigate('/'))
    }

    return ( 
        <>
            <div>
                <form className="register-user" onSubmit={handleSubmit}>
                    <div className="input-group mb-3" >
                        <span className="input-group-text" id="basic-addon3">New Title: </span>
                        <input name='title' value={formValues.title} onChange={handleChange} type="text" className="form-control" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update Title</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default EditPoll;