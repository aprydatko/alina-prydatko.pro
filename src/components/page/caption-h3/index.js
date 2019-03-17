import React from 'react'
import './style.css'

const Caption = ({ title, description }) => (
    <div className="caption-h3">
        <div className="container">
            <h3 className="caption-h3__title">{title}</h3>
            <p className="caption-h3__content">
                {description}
            </p>
        </div>
    </div>
)

export default Caption