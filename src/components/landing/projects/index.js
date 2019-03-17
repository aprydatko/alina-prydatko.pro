import React from 'react'
import { Link } from "gatsby"
import Caption from '../caption/index'
import WhiteSection from '../../layouts/white-section/index'
import Button from '../../button/index'
import picture from '../../../images/icons/image-regular.svg'
import './style.css'

const Work = ({ data, className }) => (
    <React.Fragment>
        <div className={className}>
            {data.map((value, index) => (
                <Link key={index} to={value.node.id} className="works__item" style={{ backgroundImage: "url( " + (value.node.image.childImageSharp.fluid.src) + " )" }}>
                    <div className="works__content">
                        <span className="works__category">
                            <img 
                                className="works__picture" 
                                src={picture} 
                                alt="icon picture" />
                        </span>
                        <h3 className="works__title">{value.node.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    </React.Fragment>
)

const Project = ({ data }) => (
    <WhiteSection className="project">
        <Caption 
            title="Последние работы" 
            description="2018 - 2019" />
        <Work 
            data={data} 
            className="works" />
        <Button 
            title="Смотреть" 
            url="/" 
            className="btn btn-black works__button" />
    </WhiteSection>
)

export default Project