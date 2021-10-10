import React from 'react'
import logo from '../photos/github-logo.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer-cont">
            <a href='https://github.com/Axolotlbyte'>
                <ul className=''>
                    <li className='footer-list'>
                        <img src={logo} className='github-img'/>
                    </li>
                    <li className='footer-text'>
                        axolotbyte
                    </li>
                </ul>
            </a>
        </div>
    )
}

export default Footer