import React from "react"

import Layout from "../components/layouts/page"
import image from "../images/backgrounds/about-me.jpg"
import SEO from "../components/seo"

import Form from "../components/form/index"

const data = [
    {
        title: "Придатко Алина",
        description: "Современный художник, люблю писать картины маслом на хосте разных размеров. Люблю своего кота Боника ))",
        backgroundImage: {image},
        buttonURL: "/"
    }
]

const ContactPage = () => (
  <Layout content={data}>
      <SEO 
          title="Контакты"
          description="Описание страницы контакты"
          author="Придатко Алина"
          keywords={[`контакты`, `телефон`, `email`]} />
      <Form
          title="Контакт форма"
          description="Если у Вас остались вопросы или хотите написать важное сообщение, используйте контакт форму" />
  </Layout>
)

export default ContactPage
