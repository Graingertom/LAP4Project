import React from 'react';
import Hamburger from '../Hamburger';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const goTo = useNavigate();

    return(
    <>
        <section className='header'>
            <a href='/new' className="plusIcon">+</a>
            <img onClick={() => {goTo('/')}} src="/static/frontend/bullhorntext.png" />
            <Hamburger />
        </section>
    </>
    )
}

export default Header
