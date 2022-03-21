//Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import api from '../../api-twitch';
import "./PartnersList.css"

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
                if (res.data.data[0]) {
                    setStream(`https://player.twitch.tv/?channel=${res.data.data[0].user_login}&parent=localhost`) 
                }
            })
    };

    return ( 
        <>  
            <div className="container">
                {!stream ?
                    <div>
                        <div className='placeholder'>
                            <img className="placeholder-image" src={require('../../images/BGN-Streams.png')} alt="no streams available" />
                        </div>
                    </div>
                :
                <div className='twitch'>
                    <div className='twitch-video'>
                        <iframe
                            src={stream}
                            height="100%"
                            width="100%"
                            allowFullScreen={true}
                            title='twitch'
                            id='twitch-iframe'>
                        </iframe>
                    </div>
                </div>
                }
        
                
                <div className="row partners-container">
                    <div className='partners-header'>BGN Partnered Streamers</div>
                    {!partners ? 
                    <>
                        Create Partners to display them here.
                    </>
                    :
                    <>
                        {partners.map((el, i) => 
                            <div className="col-lg-2 card-container" key={i}>
                                <div className="card-group">
                                    <a className='card-anchor' href={`http://twitch.tv/${el.username}`} target='_blank'>
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
                                    </a>
                                    
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