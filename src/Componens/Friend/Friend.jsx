import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const { name, phone, username, email, address,id } = friend;
    
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p>phone:{phone}</p>
            <p> <Link to={`/friend/${id}`}>Show my friend details</Link></p>
        </div>
    );
};

export default Friend;