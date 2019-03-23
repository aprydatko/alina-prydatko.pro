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
                    slug
                    title
                    content {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                    image {
                      id
                      title
                      fixed (width: 1920, height: 1080) {
                        src
                      }
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
        title,
        slug,
        content: {
            childMarkdownRemark: {
                excerpt
            }
        },
        image
    }
 }) => (
    <div key={id} className="slider">
        <div className="slider__item" style={{ backgroundImage: `url(${image.fixed.src})` }}>
            <div  className="slider__content">
                <div className="container" style={{ position: "relative" }}>
                    <h1 
                        style={{ color: "white" }}>
                        {trim(`${title}`, 30)}
                    </h1>
                    <p>
                        {trim(`${excerpt}`, 150)}
                    </p>
                    <Button 
                        url={slug}
                        className="btn btn-white slider__btn" 
                        title="Смотреть" />
                </div>
            </div>
        </div>
    </div>
 )

export default Slider