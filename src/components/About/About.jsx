import React from 'react'
import './About.css'
import ME from '../../assets/me-about2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id className='about'>
            <h5>Gat To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ worldwide</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Project</h5>
                            <small>30+ complated</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                    </div>
                    <p>A Passionate Web Developer. Has good knowledge of Html,
                        CSS, Javascript, ReactJs, Tailwind CSS, Bootstrap, Firebase, etc. Seeking a
                        Challenging Environment where quality is the primary concern & working
                        opportunities provides me a potential avenue of learning.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About