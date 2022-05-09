import React from 'react';
import Hamburger from '../Hamburger';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const goTo = useNavigate();

    return(
    <>
        <section className='header'>
            <a>+</a>
            <h1 onClick={() => {goTo('/')}}>Bullhorn</h1>
            <Hamburger />
        </section>
    </>
    )
}

export default Header
