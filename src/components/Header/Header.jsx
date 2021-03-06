import React from 'react'
import './Header.css'
import CTA from './CTA';
import ME from '../../assets/momin.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I,m</h5>
                <h1>Md Momin Ali</h1>
                <h5 className='text-light'>front-end developer</h5>
                <CTA />
                <HeaderSocial />

                <div className='me'>
                    <img className='img' src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header