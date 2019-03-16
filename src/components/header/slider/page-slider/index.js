import React from 'react'
import Button from '../../button/index'
import './style.css'

const trim = (str, maxlength) => {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + '...' : str;
}

const Slider = ({ title, descr, imgUrl, btnUrl }) => (
    
    <div className="slider">
        <div className="slider__item">
            <div className="slider__content">
                <img 
                    className="slider__picture" 
                    src={imgUrl}
                    alt={title} />
                <div className="container" style={{ position: "relative" }}>
                    <h1 
                        style={{ color: "white" }}>
                        {trim(`${title}`, 30)}
                    </h1>
                    <p>
                        {trim(`${descr}`, 150)}
                    </p>
                    <Button 
                        url={btnUrl} 
                        className="btn btn-white slider__btn" 
                        title="Смотреть" />
                </div>
            </div>
        </div>
    </div>
)

export default Slider