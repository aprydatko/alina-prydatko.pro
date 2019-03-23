import React from 'react'
import './style.css'

import config from '../../../../config'

const Copyright = () => (
    <div className="copyright">
        <p className="copyright__text">
            © {new Date().getFullYear() + ' '} 
            Сделано <a target="_blank" href={`http://${config.siteCopyright.site}`} style={{ color: "white" }}>{config.siteCopyright.site}</a>
        </p>
    </div>
)

export default Copyright