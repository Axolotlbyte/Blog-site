import React from 'react';
import '../styles/header.css'

const Header = () => {
    return(
        <div className="header-cont">
            <a href='/' className='link'>
                <div className="text-cont">
                    BlogPost
                </div>
            </a>
        </div>
    )
}

export default Header