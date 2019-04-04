import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/category"
import SEO from "../components/seo"

import image from "../images/slides/portfolio.jpg"
import CaptionH2 from "../components/page/caption-h2"
import WorkItem from "../components/work/index"

const content = {
  title: "Портфолио",
  description: "Здесь собраны все нарисованный мной картины. ",
  backgroundImage: {image},
  buttonURL: "/portfolio#portfolio"
}

const Work = ({ data }) => (
    <>
      <Layout content={content}>
      <SEO 
          title="Портфолио"
          description="В категории портфолио я собираю все свои лучшие работы выполнены маслом. Вы можете посмотреть картины, которые я рисовала в разные годы своего творческого пути."
          author="Придатко Алина"
          keywords={[`портфолио`, `картины`, `купить`]} />
          <CaptionH2 
            category="мое портфолио"
            title="Портфолио"
            description="Сборник картин разных жанров, стилей. Все работы, которые проданы или недоступны к продаже."/>
          <WorkItem data={data.allContentfulPortfolio.edges}/>
      </Layout>
    </>
)

export default Work

export const pageQuery = graphql`
  query PortfolioQuery {
    allContentfulPortfolio {
        edges {
          node {
            id
            title
            slug
            category
            content {
              childMarkdownRemark {
                html
                excerpt
              }
            }
            image {
              id
              title
              description
              fixed (width: 570) {
                  src
              }
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