//Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const PartnersList = (props) => {
    
    //Declare partners
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

    return ( 
        <>
            <div className="container">
                Partners List
                <div className="row">
                    {!partners ? 
                    <>
                        Create Partners to display them here.
                    </>
                    :
                    <>
                        {partners.map((el, i) => 
                            <div className="col-lg-2" key={i}>
                                <div className="card-group">
                                    <div className="card">
                                        <img src={`http://localhost:5003/${el.image}`} className="card-img-top" alt='...'/>
                                        <div className="card-body">
                                            <h5 className="card-title">{el.username}</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Status</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                    }
                </div>
            </div>
        </>
     );
};

//Export
export default PartnersList;