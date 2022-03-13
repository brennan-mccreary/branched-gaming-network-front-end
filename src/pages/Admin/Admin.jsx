//Imports
import userEvent from '@testing-library/user-event';
import React from 'react';
import { 
    Link,
    Route,
    Routes, 
    useNavigate } from 'react-router-dom';

//Import Components/Pages
import RemovePartner from '../../components/RemovePartner/RemovePartner';
import AddPartner from '../../components/AddPartner/AddPartner';
import CreatePoll from '../../components/CreatePoll/CreatePoll';
import EditPoll from '../../components/EditPoll/EditPoll';

//Import hooks
import useForm from "../../CustomHooks/useForm"

//Stateless functional component
const Community = (props) => {
    let navigate = useNavigate();
    const { formValues, handleChange, handleSubmit } = useForm(undefined);

    return ( 
        <>
           {props.user == undefined || props.user === false ?
            <div>
                Admin Access Only
            </div>
           :
           <div>
                {/* selectively render login/register/logout section based on props.user existence status */}
                {!props.user ? 
                    <div>
                        <Link to='/user/login'><button>Login</button></Link>
                        <Link to='/'><button>Home</button></Link>
                        <Link to='/explore'><button>Explore</button></Link>
                        <Link to='/community'><button>Dashboard</button></Link>
                        <Link to='/roots'><button>About</button></Link>
                    </div>
                :
                    <div>
                        <span>{props.user.firstName + ' ' + props.user.lastName}</span>
                        <Link to='/'><button onClick={props.logout}>Logout</button></Link>
                        <Link to='/'><button>Home</button></Link>
                        <Link to='/explore'><button>Explore</button></Link>
                        <Link to='/community'><button>Dashboard</button></Link>
                        <Link to='/roots'><button>About</button></Link>
                        {props.user.isAdmin === true ? 
                        <Link to='/admin'><button>Admin Panel</button></Link>
                        :
                        null
                        }
                    </div>
                }

                Admin access panel

                <>
                    {/* <Link to='create-poll/'><button>Create Poll</button></Link>
                    <Link to='edit-poll'><button>Edit Poll</button></Link>
                    <Link to='add-partner'><button>Add Partner</button></Link>
                    <Link to='remove-partner'><button>Remove Partner</button></Link> */}

                    {/* <div>
                        <Routes>
                            <Route exact path='/create-poll'
                                element={
                                    <EditPoll
                                        
                                    />
                                }/>

                            <Route path='/edit-poll'
                                element={
                                    <EditPoll 
                                        
                                    />
                                }/>

                            <Route path='/add-partner'
                                element={
                                    <EditPoll 
                                        
                                    />
                                }/>

                            <Route path='/remove-partner'
                                element={
                                    <EditPoll
                                        
                                    />
                                }/>
                        </Routes> 
                    </div> */}
                </>
                

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <CreatePoll/>
                            <EditPoll/>
                        </div>
                        <div className="col-md-6">
                            <AddPartner/>
                            <RemovePartner/>
                        </div>
                    </div>
                </div>
           </div>
           }

                
        </>
     );
}

//Exports
export default Community;