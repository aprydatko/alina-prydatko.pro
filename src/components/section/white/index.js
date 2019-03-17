import React from 'react'
import './style.css'

const Section = ({ children, className }) => (
    <section className={`white-section ${className}`}>
        <div className="container">
            {children}
        </div>
    </section>
)

export default Section