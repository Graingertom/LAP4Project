import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hamburger = () => {
    const goTo = useNavigate();

    const [ state, setState ] = useState(false)

    return(
        <>
    <div className='hamburger'>
        {!state && (
        <button className='dropdown' onClick={() => setState(!state)}>☰</button>
        )}
        {state && (
            <ul onMouseLeave={() => setState(!state)}>
                <li onClick={() => goTo('/')}>Home</li>
                <li onClick={() => goTo('/profile')}>Profile</li>
                <li>Feed</li>
                <li onClick={() => goTo('logout')}>Logout</li>
            </ul>
        )}
    </div>
    </>
    )
}

export default Hamburger
