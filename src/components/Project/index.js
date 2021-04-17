import React from 'react';
import styled from 'styled-components';


function Project() {
    return(
        <StyledProject id = "project"> 
                <div className="myWork">
                    <h2 className="my-works-title">Jephte's work</h2>
                </div>
                <div className="all-work">
                    <div className="all-work-content">
                        <a href="https://dev-connect-ac.herokuapp.com/login" target="_blank">
                            <div>
                                <p className="projectName dc">Dev Connect</p>
                            </div>
                        </a>
                        <a href="https://sleepy-hollows-15649.herokuapp.com/" target="_blank">
                            <div>
                                <p className="projectName zk">Zookeeper</p>
                            </div>
                        </a>
                        <a href="https://pran-notes.herokuapp.com/" target="_blank">
                            <div>
                                <p className="projectName">Note Taker</p>
                            </div>
                        </a>
                        <a href="https://jephtebb.github.io/Explore-Outdoors/" target="_blank" >
                            <div>
                                <p className="projectName eo">Explore Outdoors</p>
                            </div>
                        </a>
                        <a href="https://jephtebb.github.io/Work-Day-Scheduler/" target="_blank">
                            <div>
                                <p className="projectName wds">Work Day Scheduler</p>
                            </div>
                        </a>
                        <a href="https://jephtebb.github.io/Todo-List/" target="_blank">
                            <div>
                                <p className="projectName tdl">ToDo List</p>
                            </div>
                        </a>
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