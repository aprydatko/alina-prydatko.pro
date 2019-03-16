import React from "react"
import Button from "../../../button/index"
import "./style.css" 

const trim = (str, maxlength) => {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + '...' : str;
}

const Slider = ({ data }) => (
    
    <div className="slider">
        <div className="slider__item">
            {data.map((value, index) => index < 1 ?
                <div key={index} className="slider__content">
                    <img className="slider__picture" src={value.node.image.childImageSharp.fluid.src}></img>
                    <div className="container" style={{ position: "relative" }}>
                        <h1 
                            style={{ color: "white" }}>
                            {trim(`${value.node.title}`, 30)}
                        </h1>
                        <p>
                            {trim(`${value.node.content}`, 150)}
                        </p>
                        <Button 
                            url={value.node.id} 
                            className="btn btn-white slider__btn" 
                            title="Смотреть" />
                    </div>
                </div> 
                : ""   
            )}
        </div>
    </div>
)

export default Slider