import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/category"
import SEO from "../components/seo"

import image from "../images/slides/works.jpg"
import CaptionH2 from "../components/page/caption-h2"
import WorkItem from "../components/work/index"

const content = {
  title: "Мои работы",
  description: "Эмоции или чувства — это единственная вещь в картинах, которую я нахожу интересной. Все, что сверх этого, это всего лишь трюк (Кристофер Андерсон)",
  backgroundImage: {image},
  buttonURL: "/works#works"
}

const Work = ({ data }) => (
    <>
      <Layout content={content}>
      <SEO 
          title="Мои картины"
          description="Здесь размещены все мои картины на продажу. Я стараюсь как можно быстрей разместить сюда свои лучшие работы."
          author="Придатко Алина"
          keywords={[`мои работы`, `картины`, `купить`]} />
          <CaptionH2 
            category="картины"
            title="Картины на продажу"
            description="В этом разделе Вы можете выбрать и купить любую картину. Я могу подобрать для Вас рамку, покрыть эпоксидной смолой, сделать красивое оформление."
            id="works"/>
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
            title
            slug
            category
            price
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