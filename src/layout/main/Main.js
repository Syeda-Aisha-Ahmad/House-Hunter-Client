import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';

const main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default main;