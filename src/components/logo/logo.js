import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.css"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 175) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
        <Img 
            className="logo" 
            fluid={data.placeholderImage.childImageSharp.fluid} 
        />}
  />
)
export default Logo
