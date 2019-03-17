import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Button from "../../../button/index"
import "./style.css" 

const trim = (str, maxlength) => {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + '...' : str;
}

const Slider = () => (
    <StaticQuery 
        query={graphql`
        {
            allContentfulWorks {
                edges {
                  node {
                    id
                    header
                    content {
                      content
                    }
                    image {
                      id
                      title
                      file {
                        url
                      }
                    }
                  }
                }
            }
          }
        `}
        render={({
            allContentfulWorks: {
                edges
            }
        }) => (
            edges.map(({ node }, index) => (
               index === 0 ? <Slide content={node} key={node.id} /> : ""
            ))
        )}
    />
)

const Slide = ({
    content: {
        id,
        header,
        content: {
            content
        },
        image: {
            title,
            file: {
                url
            }
        }
    }
 }) => (
    <div key={id} className="slider">
        <div className="slider__item" style={{ backgroundImage: `url(${url})` }}>
            <div  className="slider__content">
                <div className="container" style={{ position: "relative" }}>
                    <h1 
                        style={{ color: "white" }}>
                        {trim(`${header}`, 30)}
                    </h1>
                    <p>
                        {trim(`${content}`, 150)}
                    </p>
                    <Button 
                        url={`/${title}`}
                        className="btn btn-white slider__btn" 
                        title="Смотреть" />
                </div>
            </div>
        </div>
    </div>
 )

export default Slider