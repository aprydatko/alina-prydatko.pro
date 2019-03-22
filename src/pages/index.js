import React from "react"

import ReactGA from 'react-ga'

ReactGA.initialize('UA-136796685-1');
ReactGA.pageview('/');

import Layout from "../components/layouts/index"
import Author from "../components/landing/author/index"
import Projects from "../components/landing/projects/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Персональный сайт"
      description="Здесь размещены картины на продажу, есть возможность заказать картину на произвольную тему. Алина пищет на холстах разного формата, использует масло, эпоксидную смолу для работы"
      author="Придатко Алина"
      keywords={[`художник`, `картины`, `купить`]} />
      <Author  />
      <Projects />
  </Layout>
)

export default IndexPage
