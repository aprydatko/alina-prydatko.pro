import React from 'react'
import './style.css'

const Caption = ({ title, description }) => (
    <div className="caption">
        <h2 className="caption__h2">{title}</h2>
        <p className="caption__p">{description}</p>
    </div>
)

export default Caption