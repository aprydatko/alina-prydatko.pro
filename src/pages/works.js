import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/category"
import SEO from "../components/seo"

import image from "../images/backgrounds/works.jpg"
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
          title="Мои работы"
          description="Рисую картины на темы, которые мне нравятся. Некоторые картины продаю, рисую маслом, использую различные техники и материалы: масло, эпоксидная смола, прочее."
          author="Придатко Алина"
          keywords={[`мои работы`, `картины`, `купить`]} />
          <CaptionH2 
            category="мои работы"
            title="Картины на продажу"
            description="Вы можете купить картину в данном разделе. Еще я рисую картины на заказ, могу подобрать рамку, покрыть картину эпоксидной смолой."
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