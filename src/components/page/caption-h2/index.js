import React from 'react'
import './style.css'

const PageCaption = ({ category, title, description }) => (
    <div className="page-caption">
        <div className="container">
            <span className="page-caption__category">{category}</span>
            <h2 className="page-caption__title">{title}</h2>
            <p className="page-caption__content">{description}</p>
        </div>
    </div>
)

export default PageCaption