import React from 'react'
import logo from '../photos/github-logo.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='footer-cont'>
            <div>
                <img src={logo} className='logo-img'></img>
            </div>
            <a href='https://github.com/Axolotlbyte'>@axolotlbyte</a>
        </div>
    )
}

export default Footer