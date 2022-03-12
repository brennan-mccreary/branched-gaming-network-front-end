//Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import api from '../../api-twitch';

const PartnersList = (props) => {
    let ids;

    //Declare stateful variables
    const [stream, setStream] = useState(undefined);
    const [partners, setPartners] = useState(undefined);

    //Compile partner id's
    const compilePartnerList = async (data) => {
        ids = data.map((el) => {
            return ('user_id=' + el.user_id)
        })

        ids = ids.toString().replaceAll(',', '&');
        console.log(ids);
        
        if(ids !== '') {
            getLiveStreams(ids);
        }
    }
    
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
                compilePartnerList(res.data);
            })
    };

    //GET Live streams
    const getLiveStreams = async (users) => {
        await api
            .get(`https://api.twitch.tv/helix/streams?${users}`)
            .then((res) => {
                setStream(`https://player.twitch.tv/?channel=${res.data.data[0].user_login}&parent=localhost`) 
                
            })
    };

    return ( 
        <>  
            <div className="container">
                Stream Viewer
                {!stream ?
                <div>
                    No Streams Live at the Moment
                </div>
                :
                <div>
                    <iframe
                        src={stream}
                        height="720"
                        width="1280"
                        allowFullScreen={false}
                        title='twitch'
                        id='twitch-iframe'>
                    </iframe>
                </div>
                }
        
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