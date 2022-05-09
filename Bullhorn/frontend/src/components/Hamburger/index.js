import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hamburger = () => {
    const goTo = useNavigate();

    const [ state, setState ] = useState(false)

    return(
        <>
    <div className='hamburger'>
        <button className='dropdown' onClick={() => setState(!state)}>Button</button>
        {state && (
            <ul>
                <li onClick={() => goTo('/')}>Home</li>
                <li onClick={() => goTo('/profile')}>Profile</li>
                <li>Feed</li>
            </ul>
        )}
    </div>
    </>
    )
}

export default Hamburger
