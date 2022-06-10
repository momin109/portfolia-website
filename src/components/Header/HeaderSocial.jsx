import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/md-momin-ali-43a3b0241/" target='_blank'><BsLinkedin /></a>
            <a href="github.com" target='_blank'><BsGithub /></a>
            <a href="facebook.com" target='_blank'><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial