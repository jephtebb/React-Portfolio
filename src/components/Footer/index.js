import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';




const Love = <FontAwesomeIcon icon={faHeart} />

function Footer() {


    return (
        <section>
            <footer className="footer">
                <h1>
                    Made with {Love} by Jephte Borno
                </h1>
                <div className="social">
                <p>You can contact me via email:<br/>
                 <a href="mailto:hege@example.com">jephteborno@yahoo.com</a></p>
                 <i className="fab fa-linkedin-in"></i>
                </div>
                
            </footer>
          




            
            
        </section>

    )

}
export default Footer