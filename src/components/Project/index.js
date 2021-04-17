import React from 'react';
import styled from 'styled-components';
import '../styles.css'


function Project() {
    return(
        <StyledProject id = "project"> 
                <div className="myWork">
                    <h2 className="my-works-title">Jephte's work</h2>
                </div>
                <div className="all-work">
                    <div className="all-work-content">
                        <div className="one">
                        <a className="column" href="https://dev-connect-ac.herokuapp.com/login" target="_blank">
                          
                        </a>
                        </div>
                        <div className="two">
                        <a className="column" href="https://sleepy-hollows-15649.herokuapp.com/" target="_blank">
                           
                        </a>
                        </div>
                        <div className="three">
                        <a className="column" href="https://pran-notes.herokuapp.com/" target="_blank">
                           
                        </a>
                        </div>
                        <div className="four">
                        <a className="column" href="https://jephtebb.github.io/Explore-Outdoors/" target="_blank" >
                           
                        </a>
                        </div>
                       <div className="five"> 
                        <a className="column" href="https://jephtebb.github.io/Work-Day-Scheduler/" target="_blank">
                            
                        </a>
                       </div>
                        <div className="six">
                        <a className="column" href="https://jephtebb.github.io/Todo-List/" target="_blank">
                           
                        </a>
                        </div>
                    </div>
                </div>
            
        </StyledProject>
    )
}

const StyledProject = styled.section`
.myWork{
    align-items:center;
}




`


export default Project