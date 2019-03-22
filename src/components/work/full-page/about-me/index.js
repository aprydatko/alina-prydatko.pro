import React from 'react'

const LayoutWork = ({ data, children }) => (
    <div className="full-work">
        <div className="full-work__wrapper">
            <div className="full-work__content">
                <h2 id="about-me" className="full-work__title">{data.name}</h2>
                {children}
            </div>
        </div> 
    </div>
)

export default LayoutWork