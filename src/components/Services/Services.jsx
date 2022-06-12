import React from 'react'
import './Services.css'
import { BsCheck } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>



                    </ul>
                </article>
                {/* End of UI/UX */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Frontend developer</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>




                    </ul>
                </article>
                {/* End of web development*/}
                <article className='service'>
                    <div className="service__head">
                        <h3>Backend deveper</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                        </li>



                    </ul>
                </article>
                {/* End of ecommarse */}
            </div>
        </section>
    )
}

export default Services