import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
    }, [location.pathname])

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur-sm bg-secondarylight bg-opacity-10 w-full h-20 p-4 flex justify-between items-center">
            <div className="w-full flex justify-center items-center gap-5">
                <Link to="/" className={`hover:underline text-xl text-secondarylight ${!(location.pathname?.toLowerCase() === '/form') ? 'font-bold' : null}`}>List</Link>
                <Link to="/form" className={`hover:underline text-xl text-secondarylight ${location.pathname?.toLowerCase() === '/form' ? 'font-bold' : null}`}>New User</Link>
            </div>
        </nav>
    );
};

export default Navbar;
