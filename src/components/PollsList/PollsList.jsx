import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './PollsList.css';

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
            {props.user !== undefined?
                <div className='polls-container'>
                    <div className='polls-header'>Community Polls</div>
                    {polls !== undefined?
                        <div>
                            {polls.map((el, i) => {
                                if(el.voters.includes(props.user._id)) {
                                    return(
                                        <div className="polls-container-inner">
                                            <div className='poll-title'>{el.title}</div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-9 col-xs-10">
                                                        <div className='result-text'>{el.options[0].title} :</div>
                                                        <div className='result-text'>{el.options[1].title} :</div>
                                                        <div className='result-text'>{el.options[2].title} :</div>
                                                        <div className='result-text'>{el.options[3].title} :</div>
                                                    </div>
                                                    <div className="col-md-3 col-xs-2 result-container">
                                                        <div className='result-count' id={el._id}>{el.options[0].votes}</div>
                                                        <div className='result-count' id={el._id}>{el.options[1].votes}</div>
                                                        <div className='result-count' id={el._id}>{el.options[2].votes}</div>
                                                        <div className='result-count' id={el._id}>{el.options[3].votes}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {props.user.isAdmin === true ?
                                                <div className='poll-btn-container'>
                                                    <button className='btn poll-btn' id={el._id} onClick={editPoll}>Edit Poll</button>
                                                    <button className='btn poll-btn' id={el._id} onClick={deletePoll}>Delete Poll</button>
                                                </div>
                                            :
                                            null
                                            }
                                        </div>
                                    )
                                }
                                else {
                                    return(
                                        <div className="polls-container-inner">
                                            <div className='poll-title'>{el.title}</div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-9 col-xs-10">
                                                        <div className='result-text'>{el.options[0].title}</div>
                                                        <div className='result-text'>{el.options[1].title}</div>
                                                        <div className='result-text'>{el.options[2].title}</div>
                                                        <div className='result-text'>{el.options[3].title}</div>
                                                    </div>
                                                    <div className="col-md-3 col-xs-2 result-container">
                                                        <div className='result-count' id={el._id}><button className="btn poll-vote-btn" id={el.options[0]._id} onClick={handleClick}></button></div>
                                                        <div className='result-count' id={el._id}><button className="btn poll-vote-btn" id={el.options[1]._id} onClick={handleClick}></button></div>
                                                        <div className='result-count' id={el._id}><button className="btn poll-vote-btn" id={el.options[2]._id} onClick={handleClick}></button></div>
                                                        <div className='result-count' id={el._id}><button className="btn poll-vote-btn" id={el.options[3]._id} onClick={handleClick}></button></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {props.user.isAdmin === true ?
                                                <div className='poll-btn-container'>
                                                    <button className='btn poll-btn' id={el._id} onClick={editPoll}>Edit Poll</button>
                                                    <button className='btn poll-btn' id={el._id} onClick={deletePoll}>Delete Poll</button>
                                                </div>
                                            :
                                            null
                                            }
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    :
                        <div className='polls-header'>
                            No Active Polls
                        </div>
                    }
                </div>
            :
                <div className='polls-header'>Log in to view polls</div>
            }
            
        </>
     );
}
 
export default PollsList;