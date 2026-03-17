import React from 'react';
import Navber from '../shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <Navber/>
            <div className='min-h-screen'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;