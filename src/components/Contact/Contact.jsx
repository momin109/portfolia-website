import React from 'react'
import { icons } from 'react-icons'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icons' />
                        <h4>Email</h4>
                        <h5>mdmominali301@gmail.com</h5>
                        <a href="mailto:mdmominali301@gmail.com" target='_blank '>Send message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icons' />
                        <h4>Message</h4>
                        <h5>facebook</h5>
                        <a href="https://www.facebook.com/profile.php?id=100013460403681" target='_blank '>Send message</a>
                    </article>
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icons' />
                        <h4>whatsapp</h4>
                        <h5>+8801797764148</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801797764148" target='_blank '>Send message</a>
                    </article>
                </div>
                {/* EBD OF CONTACT option */}
                <form action="">
                    <input type="text" name="name" placeholder='name' required />
                    <input type="email" name="email" placeholder='email' required />
                    <textarea type="message" rows='7' name="name" placeholder='your message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact