import React from 'react';
import Navigate from './Navigate'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="border p-3 flex justify-between items-center">
            <span className="font-bold">
                <Link to="/">AppName</Link>
            </span>
            <Navigate />
        </header>
    )
}

export default Header;