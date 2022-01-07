import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
    return (
        <div className='landing'>
                <h1 className='h1co'>Country App</h1>
                <Link to='/countries'>
                    <button className='btnlanding'>
                        <span></span>
                        <text>Ready</text>
                    </button>
                </Link>
        </div>
    )
}

export default LandingPage;
