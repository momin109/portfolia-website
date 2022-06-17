import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Abdul Momin</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#porfolia">Porfolia</a></li>
                <li><a href="#textimonials">Textimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.facebook.com/profile.php?id=100013460403681"><BsFacebook /></a>
                <a href="https://github.com/momin109"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/md-momin-ali-43a3b0241/"><BsLinkedin /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; MD MOMIN ALI Tutorials. All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer