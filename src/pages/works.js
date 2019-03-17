import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/page"
import SEO from "../components/seo"

const Work = ({ data }) => (
    <>
      <Layout>
        <SEO title="Works Page" />
        {console.log(data)}
      </Layout>
    </>
)

export default Work

export const pageQuery = graphql`
  query WorkQuery {
    allContentfulWorks {
        edges {
          node {
            id
            header
            category
            price
            content {
              content
            }
            image {
              id
              title
              description
              file {
                url
              }
            }
            createdAt
          }
        }
    }
  }
`