import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
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
        <Link to="/">
          <Img 
              className="logo" 
              fluid={data.placeholderImage.childImageSharp.fluid} />
        </Link>
        }
  />
)
export default Logo
