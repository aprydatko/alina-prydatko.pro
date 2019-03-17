import React from "react"

import Layout from "../components/layouts/index"
import Author from "../components/landing/author/index"
import Projects from "../components/landing/projects/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Главная страница"
      description="Описание главной страницы"
      author="Придатко Алина"
      keywords={[`художник`, `картины`, `купить`]} />
      <Author  />
      <Projects />
  </Layout>
)

export default IndexPage
