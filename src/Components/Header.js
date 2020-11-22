import React,{useRef} from 'react'
import logo from '../Assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'


const Header = () => {
    const navListRef = useRef(null)  
    const handleClick = (e) =>{
        console.log('hello')
        navListRef.current.classList.toggle('display')
    }

    return (
        <div className="header">
            <img className="logo" src={logo} alt='logogit'/>
            <nav>
                <GiHamburgerMenu className="hamburger"  color='black' onClick={handleClick}/>
                <ul ref={navListRef}>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Faq</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
