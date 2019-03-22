import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header/index"
import TopMenu from "../header/top-menu/index"
import Slider from "../header/slider/page-slider/index"
import Footer from "../footer/index"

import "../typography"

const Layout = ({ children, content }) => (
  <StaticQuery
    query={graphql`
      query PageTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}>
            <TopMenu />
            <Slider 
              title={content.title}
              description={content.description}
              backgroundImage={content.backgroundImage.image}
              buttonUrl={content.buttonURL} />
        </Header>
        <main className="container">{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
