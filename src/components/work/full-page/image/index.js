import React from 'react'
import './style.css'

const Image = ({ url, category }) => (
    <div className="page-img" style={{ backgroundImage: "url( " + url + " )" }}>
        <div className="page-image__category">{category}</div>
    </div>
)

export default Image