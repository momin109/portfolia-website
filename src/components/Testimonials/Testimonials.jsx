import React from 'react'
import './Testimpnials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// core version + navigation, pagination modules:
import { Pagination, Navigation, scollbar, Ally } from 'swiper';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';





const data = [
    {
        avater: AVTR1,
        name: 'tina Show',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem eos rem laudantium id cupiditate aut! Debitis aperiam corporis nostrum.',
    },
    {
        avater: AVTR2,
        name: 'tina Show',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem eos rem laudantium id cupiditate aut! Debitis aperiam corporis nostrum.',
    },
    {
        avater: AVTR3,
        name: 'tina Show',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem eos rem laudantium id cupiditate aut! Debitis aperiam corporis nostrum.',
    },
    {
        avater: AVTR4,
        name: 'tina Show',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem eos rem laudantium id cupiditate aut! Debitis aperiam corporis nostrum.',
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'>



                {
                    data.map(({ avater, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonials'>
                                <div className='client__avatar'>
                                    <img src={avater} alt="Avater One" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials