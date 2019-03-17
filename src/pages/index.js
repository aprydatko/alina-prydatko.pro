import React from "react"

import Layout from "../components/layouts/index"
import Author from "../components/landing/author/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Главная страница" 
      keywords={[`художник`, `картины`, `купить`]} />
      <Author  />
  </Layout>
)

export default IndexPage
