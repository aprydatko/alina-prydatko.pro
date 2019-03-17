import React from 'react'
import Button from '../../../button/index'
import '../home-slider/style.css'

const trim = (str, maxlength) => {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + '...' : str;
}

const Slider = ({ data }) => (
    
    <div className="slider">
        {data.map((slider, index) => (
            <div key={index} className="slider__item" style={{ backgroundImage: `url(${slider.backgroundImage.image})` }}>
                <div className="slider__content">
                        <div className="container" style={{ position: "relative" }}>
                            <h1 
                                style={{ color: "white" }}>
                                {trim(`${slider.title}`, 30)}
                            </h1>
                            <p>
                                {trim(`${slider.description}`, 150)}
                            </p>
                            <Button 
                                url={slider.buttonURL} 
                                className="btn btn-white slider__btn" 
                                title="Смотреть" />
                        </div>
                    </div>
            </div>
        ))}
    </div>
)

export default Slider