import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import image from "../images/backgrounds/about-me.jpg"
import SEO from "../components/seo"


import Layout from "../components/layouts/page"
import FullPage from "../components/work/full-page/about-me/index"
import Form from "../components/form/index"

const content = {
    title: "Обо мне",
    description: "Современный художник, люблю много спать, много есть, иногда рисую. Люблю своего кота Боника ))",
    backgroundImage: {image},
    buttonURL: "/"
}

class AboutMePage extends Component {
    render() {
        const {
            name,
            text,
        } = this.props.data.contentfulAuthor
      return (
        <Layout content={content}>
            <SEO 
                title="Обо мне"
                description="На странице Обо мне можно кратко узнать чем я занималась последние несколько лет. Возможно здесь появится моя биография или портфолио проданых работ."
                author="Придатко Алина"
                keywords={[`обо мне`, `портфолио`, `биография`]} />
            <FullPage data={this.props.data.contentfulAuthor}>
                <div dangerouslySetInnerHTML={{__html: text.childMarkdownRemark.html}} />
                <Form 
                    title="Форма для связи" />
            </FullPage>
            
        </Layout>
      )
    }
  }
  
  AboutMePage.propTypes = {
      data: PropTypes.object.isRequired
  }
  
  export default AboutMePage

export const pageQuery = graphql`
  query AboutMeQuery {

    contentfulAuthor {
        name
        text {
          childMarkdownRemark {
            html
            excerpt
          }
        }
        avatar {
          file {
            url
          }
        }
      }
  }
`
