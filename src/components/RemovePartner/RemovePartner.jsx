import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './RemovePartner.css';

const RemovePartner = (props) => {
    const [partners, setPartners] = useState(undefined);

    //Run on startup
    useEffect(() => {
        getPartners();
        
    }, []);

    //HTTP Requests
    //GET Partner list
    const getPartners = async () => {
        await axios
            .get('http://localhost:5003/api/partners/')
            .then((res) => {
                setPartners(res.data);
            })
    };

    //DEL Partner
    const delPartner = async(event) => {
        let id = event.target.id
        console.log(id);
        await axios
            .delete(`http://localhost:5003/api/partners/remove/${id}`, {
                headers: {
                    'x-auth-token' : localStorage.getItem('token')
                }
            })
            .then((res) => {
                setPartners(res.data)
            })
    }

    return ( 
        <>
                    <div className="remove-partner-container">
                        {!partners ? 
                        <>
                            Create Partners to display them here.
                        </>
                        :
                        <>
                            {partners.map((el, i) => 
                                <div className="" key={i}>
                                    <div className="card-group remove-partner-card">
                                        <div className="card ">
                                            <img src={`http://localhost:5003/${el.image}`} className="card-img-top" alt='...'/>
                                            <div className="card-body">
                                                <h5 className="card-title">{el.username}</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted">Status</small>
                                            </div>
                                            <div>
                                                <button id={el._id} className='btn btn-danger remove-partner-btn' onClick={delPartner}>Delete Partner</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                        }
                    </div>
        </>
     );
}
 
export default RemovePartner;