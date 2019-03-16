import React from 'react'
import './style.css'

import config from '../../../config'

const SocialMenu = ({ data, className }) => (
    <ul className={`social ${className}`}>
        {data.map((social, index) => (
            <li key={index} className="social__block">
                <a href={social.url} className="social__link">
                    <img 
                        className="social__img" 
                        src={social.icon}  
                        alt={social.name} />
                </a>
            </li>
        ))}
    </ul>
)

const Social = ({ className }) => (
    <SocialMenu 
        data={config.siteSocial.social}
        className={className} />
)

export default Social