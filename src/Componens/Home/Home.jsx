import React from 'react';
import { Outlet } from 'react-router-dom';
import Headar from '../Headar/Headar';

const Home = () => {
    return (
        <div>
             <Headar></Headar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;