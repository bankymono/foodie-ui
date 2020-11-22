import React from 'react'
import logo from '../Assets/logo.svg'
import {AiOutlineTwitter, AiFillFacebook, AiFillInstagram} from  'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="footer-logo"/>
            <div className="social-media">
                <AiOutlineTwitter className="icon1"  color="#FA4A0C" size="24px"/>
                <AiFillFacebook className="icon2" color="#FA4A0C" size="24px"/>
                 <AiFillInstagram className="icon3"color="#FA4A0C" size="24px"/>  
            </div>
            <div className="copyright">Copywright 2020 Bella Onojie.com</div>
        </div>
    )
}

export default Footer
