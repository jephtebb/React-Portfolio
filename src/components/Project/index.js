import React from 'react';
import styled from 'styled-components';
import '../styles.css'


function Project() {
    return(
        <StyledProject id = "project"> 
                <div className="myWork">
                    <h2>Jephte's work</h2>
                </div>
                <div className="all-work">
                    <div className="all-work-content">
                        <div className="one">
                        <a className="column" href="https://dev-connect-v2.herokuapp.com/" target="_blank">Dev Connect
                        </a>
                        </div>
                        <div className="two">
                        <a className="column" href="https://sleepy-hollows-15649.herokuapp.com/" target="_blank">Zoo Keeper
                        </a>
                        </div>
                        <div className="three">
                        <a className="column" href="https://pran-notes.herokuapp.com/" target="_blank">Note Taker
                        </a>
                        </div>
                        <div className="four">
                        <a className="column" href="https://jephtebb.github.io/Explore-Outdoors/" target="_blank" >Explore Outdoors
                        </a>
                        </div>
                       <div className="five"> 
                        <a className="column" href="https://jephtebb.github.io/Work-Day-Scheduler/" target="_blank"> Work Day Scheduler  
                        </a>
                       </div>
                        <div className="six">
                        <a className="column" href="https://jephtebb.github.io/Todo-List/" target="_blank"> To Do List

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