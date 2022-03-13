import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PollsList = (props) => {

    const [polls, setPolls] = useState(undefined);

    useEffect(() => {
        getAllPolls();
    }, [])

    //HTTP Request
    //GET All Polls
    const getAllPolls = async () => {
        await axios
            .get('http://localhost:5003/api/polls/')
            .then((res) => {
                console.log(res.data)
                setPolls(res.data);
            })
    }
    
    //PUT Poll Title
    const putPollTitle = async (event) => {
        console.log(event.target.id)
    }

    //DEL Poll
    const deletePoll = async (event) => {
        await axios
            .delete(`http://localhost:5003/api/polls/remove/${event.target.id}`, {
                headers: {
                    'x-auth-token' : localStorage.getItem('token')
                }
            })
            .then((res) => {
                setPolls(res.data)
            })
    }

    return ( 
        <>
            {props.user !== undefined ?
                <div>
                    Polls
                    {polls !== undefined ?
                        <div>
                            {polls.map((el, i) => {
                                if(el.voters.includes(props.user._id)) {
                                    return(
                                        <>
                                            
                                        </>
                                    )
                                }
                                else {
                                    return(
                                        <>
                                            <div key={i}>{el.title}</div>
                                            <div>{el.options[0].title} : {el.options[0].votes}</div>
                                            <div>{el.options[1].title} : {el.options[1].votes}</div>
                                            <div>{el.options[2].title} : {el.options[2].votes}</div>
                                            <div>{el.options[3].title} : {el.options[3].votes}</div>
                                            {props.user.isAdmin === true ?
                                                <div>
                                                    <button id={el._id} onClick={putPollTitle}>Edit Poll</button>
                                                    <button id={el._id} onClick={deletePoll}>Delete Poll</button>
                                                </div>
                                            :
                                            null
                                            }
                                        </>
                                    )
                                }
                            })}
                        </div>
                    :
                        <>
                            No Active Polls
                        </>
                    }
                </div>
            :
                <>Log in to view polls</>
            }
            
        </>
     );
}
 
export default PollsList;