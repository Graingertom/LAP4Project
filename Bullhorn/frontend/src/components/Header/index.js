import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const goTo = useNavigate();

    return(
    <>
        <section className='header'>
            <a>+</a>
            <h1 onClick={() => {goTo('/')}}>Bullhorn</h1>
            <a>Settings</a>
        </section>
    </>
    )
}

export default Header
