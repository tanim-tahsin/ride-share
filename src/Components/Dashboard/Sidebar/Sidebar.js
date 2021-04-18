import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faCog,faUserLock,faUserCog, faSignOutAlt,faText, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import css from './Sidebar.css'

import { UserContext } from '../../../App';
const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [admin, setAdmin] = useState(false)
    useEffect(()=>{
        fetch(`https://immense-beyond-89177.herokuapp.com/dashboard/isAdmin`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: loggedInUser.email })
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data)
                    console.log(data);
                });
        }, [])
        
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
        <li>
                <Link to="/dashboard/book/:_id" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Book</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/addreviews" className="text-white">
                    <FontAwesomeIcon icon={faUserCog} /> <span>Review</span>
                </Link>
            </li>
          
            <li>
                <Link to="/dashboard/bookinglist" className="text-white">
                    <FontAwesomeIcon icon={faCog} /> <span>Booking List</span>
                </Link>
            </li>
         {
             admin && 
             <div>
                    <li>
                <Link to="/dashboard/manageadmin" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Manage Admin</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/addAdmin" className="text-white">
                    <FontAwesomeIcon icon={faUserLock} /> <span>Add Admin</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/addservice" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Service</span>
                </Link>
            </li>
             </div>
         }
        </ul>
        
    </div>
    );
};

export default Sidebar;