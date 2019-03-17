import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { ReactComponent as Icon } from "../../../images/icons/phone.svg"
import './style.css'

const PhoneComponent = () => (
    <StaticQuery 
        query={graphql`
            {
                allContentfulContact {
                edges {
                    node {
                    name
                    content
                    }
                }
                }
            }
        `}
        render={({
            allContentfulContact: {
                edges
            }
        }) => (
            edges.map(({ node }, index) => (
                index === 0 ? <Phone content={node} key={index} /> : ""
            ))
        )}
    />
)

const Phone = ({
    content: {
        name,
        content
    }
 }) => (
    <div className="phone">
        <Icon className="phone__icon" />
        <div className="phone__wrapper">
            <div className="phone__title">
                {name}
            </div>
            <div className="phone__number">
                {content}
            </div>
        </div>
    </div>
)

export default PhoneComponent