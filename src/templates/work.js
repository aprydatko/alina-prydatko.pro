import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/page"
import SEO from "../components/seo"

const WorkTemplates = ({ data }) => (
    <>
      <Layout>
        <SEO title="Works Page" />
        {console.log(data)}
      </Layout>
    </>
)

export default WorkTemplates

export const pageQuery = graphql`
  query WorksQuery {
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