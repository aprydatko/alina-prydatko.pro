import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './style.css'

import { ReactComponent as Facebook } from "../../images/icons/social/facebook.svg"
import { ReactComponent as Twitter } from "../../images/icons/social/twitter.svg"
import { ReactComponent as Instagram } from "../../images/icons/social/instagram.svg"
import { ReactComponent as Linkendin } from "../../images/icons/social/linkedin.svg"

const Wrapper = ({ children }) => (
    <div className="social">
        {children}
    </div>
)

const SocialItems = () => (
    <StaticQuery 
        query={graphql`
            {
                allContentfulSocial {
                    edges {
                      node {
                        name
                        url
                      }
                    }
                  }
            }
        `}
        render={({
            allContentfulSocial: {
                edges
            }
        }) => (
            edges.map(({ node }, index) => (
                <Link content={node} key={index} />
            ))
        )}
    />
)

const Link = ({ 
    index,
    content: {
        name,
        url
    }
 }) => (
    <a href={url} className="social__link">
        {   name === "Facebook" ? <Facebook className="social__img" /> :
            name === "Twitter" ? <Twitter className="social__img" /> :
            name === "Instagram" ? <Instagram className="social__img" /> :
            <Linkendin className="social__img" /> }
    </a>
)

const Social = () => (
    <Wrapper>
        <SocialItems />
    </Wrapper>
)

export default Social