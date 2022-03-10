import React from 'react';

const ModeratorList = (props) => {
    return ( 
        <>
            <div className="container">
                
                    <div className="card">
                        <img src={require('../../images/placeholder.png')} className="card-img-top" alt='...'/>
                        <div className="card-body">
                            <h5 className="card-title">Test Moderator</h5>
                            <p className="card-text">This is a test bio for a test moderator</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={require('../../images/placeholder.png')} className="card-img-top" alt='...'/>
                        <div className="card-body">
                            <h5 className="card-title">Test Moderator</h5>
                            <p className="card-text">This is a test bio for a test moderator</p>
                        </div>
                    </div>
               
            </div>
        </>
     );
}
 
export default ModeratorList;