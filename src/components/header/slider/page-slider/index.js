import React from 'react'
import Button from '../../../button/index'
import '../home-slider/style.css'

const trim = (str, maxlength) => {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + '...' : str;
}

const Slider = ({ title, description, backgroundImage, buttonUrl }) => (
    
    <div className="slider">
       
        <div className="slider__item" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="slider__content">
                    <div className="container" style={{ position: "relative" }}>
                        <h1 
                            style={{ color: "white" }}>
                            {trim(`${title}`, 30)}
                        </h1>
                        <p>
                            {trim(`${description}`, 150)}
                        </p>
                        <Button 
                            url={buttonUrl} 
                            className="btn btn-white slider__btn" 
                            title="Смотреть" />
                    </div>
                </div>
        </div>
    </div>
)

export default Slider