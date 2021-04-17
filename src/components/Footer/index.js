import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



const Love = <FontAwesomeIcon icon={faHeart} />
function Footer() {


    return (
        <section>
            <footer>
                <h1>
                    Made with {Love} by Jephte Borno
                </h1>
                <div className="social">
                    <div className="facebook"></div>
                    <div className="twitter"></div>  
                    <div className="lindin"></div>
                </div>
                
            </footer>
          




            
            
        </section>

    )

}
export default Footer