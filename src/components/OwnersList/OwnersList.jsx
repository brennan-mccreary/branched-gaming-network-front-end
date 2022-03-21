import React from 'react';
import './OwnersList.css';

const OwnersList = (props) => {
    return ( 
        <>
            <div className="owner-header">Owners</div>
            <div className="container owner-container">  
                <div className="row">
                    <div className="col-md-6">
                        <div className="card owner-card">
                            <img src={require('../../images/placeholder.png')} className="card-img-top" alt='...'/>
                            <div className="card-body">
                                <h5 className="card-title owner-title">John Doe</h5>
                                <h6 className="card-text owner-title">"Alias"</h6>
                            </div>
                        </div>

                        <div className="card owner-card">
                            <img src={require('../../images/placeholder.png')} className="card-img-top" alt='...'/>
                            <div className="card-body">
                                <h5 className="card-title owner-title">Jane Doe</h5>
                                <h6 className="card-text owner-title">"Alias"</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card owner-card">
                            <img src={require('../../images/placeholder.png')} className="card-img-top" alt='...'/>
                            <div className="card-body">
                                <h5 className="card-title owner-title">Jane Doe</h5>
                                <h6 className="card-text owner-title">"Alias"</h6>
                            </div>
                        </div>

                        <div className="card owner-card">
                            <img src={require('../../images/placeholder.png')} className="card-img-top" alt='...'/>
                            <div className="card-body">
                                <h5 className="card-title owner-title">Jane Doe</h5>
                                <h6 className="card-text owner-title">"Alias"</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default OwnersList;