import React from 'react'
import './Portfolia.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolia = () => {
    return (
        <section id='portfolia'>
            <h5>My Recent Work</h5>
            <h2>Portfolia</h2>

            <div className='container portfolia-container'>
                <article className='portfolia__item'>
                    <div className='portfolia__item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolia item title</h3>
                    <div className="portfolia__item-cta">
                        <a href="https://github.com/momin109" className='btn' target='_blank'>Github</a>
                        <a href="https://warehouse-management-cli-dcfa7.web.app/" className='btn primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolia__item'>
                    <div className='portfolia__item-image'>
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>This is a portfolia item title</h3>
                    <div className="portfolia__item-cta">
                        <a href="https://github.com/momin109" className='btn' target='_blank'>Github</a>
                        <a href="https://warehouse-management-cli-dcfa7.web.app/" className='btn primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolia__item'>
                    <div className='portfolia__item-image'>
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a portfolia item title</h3>
                    <div className="portfolia__item-cta">
                        <a href="https://github.com/momin109" className='btn' target='_blank'>Github</a>
                        <a href="https://warehouse-management-cli-dcfa7.web.app/" className='btn primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolia__item'>
                    <div className='portfolia__item-image'>
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a portfolia item title</h3>
                    <div className="portfolia__item-cta">
                        <a href="https://github.com/momin109" className='btn' target='_blank'>Github</a>
                        <a href="https://warehouse-management-cli-dcfa7.web.app/" className='btn primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolia__item'>
                    <div className='portfolia__item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolia item title</h3>
                    <div className="portfolia__item-cta">
                        <a href="https://github.com/momin109" className='btn' target='_blank'>Github</a>
                        <a href="https://warehouse-management-cli-dcfa7.web.app/" className='btn primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolia__item'>
                    <div className='portfolia__item-image'>
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>This is a portfolia item title</h3>
                    <div className="portfolia__item-cta">
                        <a href="https://github.com/momin109" className='btn' target='_blank'>Github</a>
                        <a href="https://warehouse-management-cli-dcfa7.web.app/" className='btn primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolia