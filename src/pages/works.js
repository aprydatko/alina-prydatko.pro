import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/page"
import SEO from "../components/seo"

import image from "../images/works/works.jpg"
import CaptionH2 from "../components/page/caption-h2"
import WorkItem from "../components/work/index"

const content = [
  {
      title: "Работы",
      description: "Описание страницы работы",
      backgroundImage: {image},
      buttonURL: "/"
  }
]

const Work = ({ data }) => (
    <>
      <Layout content={content}>
      <SEO 
          title="Работы"
          description="Описание страницы работы"
          author="Придатко Алина"
          keywords={[`работы`, `картины`, `купить`]} />
          <CaptionH2 
            category="works"
            title="Мои работы"
            description="Краткое описание "/>
          <WorkItem data={data.allContentfulWorks.edges}/>
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