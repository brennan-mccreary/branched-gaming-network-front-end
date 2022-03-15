import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react';
import { 
    Link,
    Route,
    Routes, 
    useNavigate } from 'react-router-dom';
import api from '../../api-twitch';

//Import hooks
import useForm from "../../CustomHooks/useForm"

const AddPartner = (props) => {
    let navigate = useNavigate();
    const { formValues, handleChange, handleSubmit } = useForm(create);
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);
    const [file, setFile] = useState();
    const filePickerRef = useRef();

    useEffect(() => {
        if(!file) {
            return;
        };
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }, [file]);

    const pickedHandler = (event) => {
        let pickedFile;
        if(event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
        } 
        else {
            setIsValid(false);
        }
    }

    function create() {
        getTwitchUserId(formValues.username);
        navigate('/admin');
    }

    const getTwitchUserId = async (username) => {
        await api
            .get(`https://api.twitch.tv/helix/users?login=${username}`)
            .then((res) => {
                postNewPartner(res.data.data[0].id) ;
            })
    }

    const postNewPartner = async (id) => {

        var form = new FormData();
        form.append('username', formValues.username)
        form.append('firstName', formValues.firstName)
        form.append('lastName', formValues.lastName)
        form.append('image', file)
        form.append('user_id', id)


        await axios
            .post('http://localhost:5003/api/partners/create', form, {
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
                Add Partner
                <form className="register-user" onSubmit={handleSubmit}>
                    <div className="input-group mb-3" >
                        <span className="input-group-text" id="basic-addon3">Username: </span>
                        <input name='username' value={formValues.username} onChange={handleChange} type="text" className="form-control" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon4">First Name: </span>
                        <input name='firstName' value={formValues.firstName} onChange={handleChange} type="text" className="form-control"   />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon5">Last Name: </span>
                        <input name='lastName' value={formValues.lastName} onChange={handleChange} type="text" className="form-control"/>
                    </div>

                    Image:
                    <input
                        id='upload-image-form'
                        ref = {filePickerRef}
                        type = "file"
                        accept = ".jpg,.jpeg,.png"
                        onChange = {pickedHandler}
                    />
                        

                    <div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default AddPartner;