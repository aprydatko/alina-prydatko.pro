import React from "react"

import Layout from "../components/layouts/page"
import image from "../images/slides/contact.jpg"
import SEO from "../components/seo"

import CaptionH2 from "../components/page/caption-h2/index"
import Map from "../components/map/index"
import Contact from "../components/contact/index"
import Form from "../components/form/index"

const data = {
    title: "Котнакты",
    description: "Страница для быстрой связи со мной. Здесь размещены все контакты, телефон, email, социальные сети, карта, адресс.",
    backgroundImage: {image},
    buttonURL: "/"
}

const ContactPage = () => (
  <Layout content={data}>
      <SEO 
          title="Контакты"
          description="Страница для быстрой связи со мной. Здесь размещены все контакты, телефон, email, социальные сети, карта, адресс."
          author="Придатко Алина"
          keywords={[`контакты`, `телефон`, `email`]} />
      <CaptionH2 
          category="контакты"
          title="Мои контакты"
          description="Описание моих контактов" />
      <Map
          category="мои контакты"
          title="Мои контакты"
          description="Описание контактов" />
      <Contact />
      <Form
          title="Контакт форма"
          description="Если у Вас остались вопросы или хотите написать важное сообщение, используйте контакт форму" />
  </Layout>
)

export default ContactPage
