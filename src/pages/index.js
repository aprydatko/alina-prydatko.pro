import React from "react"

import Layout from "../components/layouts/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Главная страница" 
      keywords={[`художник`, `картины`, `купить`]} />
  </Layout>
)

export default IndexPage
