import React from 'react'
import './style.css'

const Toggle = ({ onClick, className }) => (
    <div id="menu-toggle" onClick={onClick} className={className}>
        <div id="hamburger">
            <span className="menu-toggle__span"></span>
            <span className="menu-toggle__span"></span>
            <span className="menu-toggle__span"></span>
        </div>
        <div id="cross">
            <span className="menu-toggle__span"></span>
            <span className="menu-toggle__span"></span>
        </div>
    </div>
)

export default Toggle