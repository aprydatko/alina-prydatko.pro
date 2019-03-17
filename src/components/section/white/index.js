import React from 'react'
import './style.css'

const Section = ({ children, className }) => (
    <section className="white-section">
        <div className={className}>
            {children}
        </div>
    </section>
)

export default Section