import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layouts/full-page"
import FullPage from "../components/work/full-page/portfolio"

const trim = (str, maxlength) => {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) : str;
}

class WorkPost extends Component {
  render() {
      const {
          title,
          content,
      } = this.props.data.contentfulPortfolio
    return (
        <Layout content={this.props.data.contentfulPortfolio}>
            <SEO 
                title={title}
                description={trim(content.childMarkdownRemark.excerpt, 200)}
                author="Придатко Алина" />
            <FullPage data={this.props.data.contentfulPortfolio}>
                <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
            </FullPage>
            {console.log(this.props.data.contentfulPortfolio)}
        </Layout>

    )
  }
}

WorkPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default WorkPost

export const pageQuery = graphql`
    query portfolioPostQuery($slug: String!) {
        
        contentfulPortfolio(slug: {eq: $slug}) {
            id
            title
            slug
            category
            image {
                fixed (width: 1920, height: 1080) {
                    src
                }
                file {
                    url
                }
            }
            content {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            createdAt
        }
    } 
`