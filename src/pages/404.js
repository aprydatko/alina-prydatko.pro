import React from "react"

import Layout from "../components/layouts/page"
import SEO from "../components/seo"

import CaptionH2 from "../components/page/caption-h2/index"
import Button from "../components/button/index"
import image from "../images/backgrounds/404page.jpg"

const data = [
    {
        title: "Страница не найдена!",
        description: "Ошибка 404 - Страница не найдена",
        backgroundImage: {image},
        buttonURL: "/"
    }
]

const NotFoundPage = () => (
  <Layout content={data}>
      <SEO 
          title="Страница не найдена!"
          description="Ошибка 404 - Страница не найдена"
          author="Придатко Алина"
          keywords={[`404`, `Error`, `ошибка`, `страница не найдена`]} />
      <CaptionH2 
          category="Error 404"
          title="Страница не найдена"
          description="К сожалению мы не смогли найти нужную страницу, попробуйте ввести правильный URL адресс или перейти на главную."/>
      <Button 
        title="Главная"
        url="/"
        className="btn btn-black btn__404page"/>
  </Layout>
)

export default NotFoundPage
