import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const PollsList = (props) => {
    let navigate = useNavigate();

    const [polls, setPolls] = useState(undefined);
    

    useEffect(() => {
        getAllPolls();
    }, [])

    const handleClick = (event) => {
        let option = event.target.id;
        let poll = event.target.parentElement.id
        
        putPollVote(props.user._id, poll, option);
    }

    const editPoll = (event) => {
        props.setPollId(event.target.id);
        navigate('edit-poll');
    }

    //HTTP Request
    //GET All Polls
    const getAllPolls = async () => {
        await axios
            .get('http://localhost:5003/api/polls/')
            .then((res) => {
                setPolls(res.data);
            })
    }
    
    //PUT Poll Vote
    const putPollVote = async (user_id, poll_id, option_id) => {
        await axios
            .put(`http://localhost:5003/api/polls/${user_id}/vote/${poll_id}/${option_id}`, undefined, {
                headers: {
                    'x-auth-token' : localStorage.getItem('token')
                }
            })
            .then((res) => {
                setPolls(res.data);
            })
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
                                            <div key={i}>{el.title}</div>
                                            <div>Total Votes: {el.totalVotes}</div>
                                            <div id={el._id}>{el.options[0].title} : {el.options[0].votes}</div>
                                            <div id={el._id}>{el.options[1].title} : {el.options[1].votes}</div>
                                            <div id={el._id}>{el.options[2].title} : {el.options[2].votes}</div>
                                            <div id={el._id}>{el.options[3].title} : {el.options[3].votes}</div>
                                            {props.user.isAdmin === true ?
                                                <div>
                                                    <button id={el._id} onClick={editPoll}>Edit Poll</button>
                                                    <button id={el._id} onClick={deletePoll}>Delete Poll</button>
                                                </div>
                                            :
                                            null
                                            }
                                        </>
                                    )
                                }
                                else {
                                    return(
                                        <>
                                            <div key={i}>{el.title}</div>
                                            <div id={el._id}>
                                                {el.options[0].title} 
                                                <button 
                                                    id={el.options[0]._id}
                                                    onClick={handleClick}
                                                    >+</button>
                                            </div>
                                            <div id={el._id}>
                                                {el.options[1].title} 
                                                <button 
                                                    id={el.options[1]._id}
                                                    onClick={handleClick}
                                                    >+</button>                                            
                                            </div>
                                            <div id={el._id}>
                                                {el.options[2].title} 
                                                <button 
                                                    id={el.options[2]._id}
                                                    onClick={handleClick}
                                                    >+</button>                                            
                                            </div>
                                            <div id={el._id}>
                                                {el.options[3].title} 
                                                <button 
                                                    id={el.options[3]._id}
                                                    onClick={handleClick}
                                                    >+</button>                   
                                            </div>
                                            {props.user.isAdmin === true ?
                                                <div>
                                                    <button id={el._id} onClick={editPoll}>Edit Poll</button>
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