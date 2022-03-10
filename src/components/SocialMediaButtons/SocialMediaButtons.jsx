import React from 'react';

const SocialMediaButtons = (props) => {
    return ( 
        <>
            <div className="wrapper">
                <a href="#" className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span><i className="fab fa-facebook-f"></i></span>
                </a>
                <a href="#" className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span><i className="fab fa-twitter"></i></span>
                </a>
                <a href="#" className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span><i className="fab fa-instagram"></i></span>
                </a>
                <a href="#" className="icon youtube">
                    <div className="tooltip">Youtube</div>
                    <span><i className="fab fa-youtube"></i></span>
                </a>
            </div>
        </>
     );
}
 
export default SocialMediaButtons;