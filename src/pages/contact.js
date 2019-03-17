import React from "react"

import Layout from "../components/layouts/page"
import image from "../images/slides/contact.jpg"
import SEO from "../components/seo"

import Map from "../components/map/index"
import Contact from "../components/contact/index"
import Form from "../components/form/index"

const data = [
    {
        title: "Котнакты",
        description: "Описание страницы контакты",
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
      <Map
          category="Contacts"
          title="Мои контакты"
          description="Описание контактов" />
      <Contact />
      <Form
          title="Контакт форма"
          description="Если у Вас остались вопросы или хотите написать важное сообщение, используйте контакт форму" />
  </Layout>
)

export default ContactPage
