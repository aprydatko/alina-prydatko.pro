import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './style.css'
import Logo from '../../logo/logo'
import background from '../../../images/backgrounds/footer.jpg'

const Header = ({ title }) => (
    <div  className="main-footer__title">
        <h6 className="main-footer__h6">{title}</h6>
    </div>
)

const Item = ({ name, content, url }) => (
    <div className="main-footer__block">
        <strong className="main-footer__name">{name}:</strong>
        {name !== "Адрес" ? 
            <a className="main-footer__link" 
                href={`${url}`}>
                {content}
            </a> :
            <div className="main-footer__link" >
                {content}
            </div>
        }
    </div>
)

const LogoBlock = () => (
    <div className="main-footer__item main-footer__logo">
        <Logo />
    </div>
)

const Wrapper = ({ children }) => (
    <div className="main-footer" 
        style={{ backgroundImage: "url( " + (background) + " )" }}>
        <div className="container">
            <div className="main-footer__wrapper">
                {children}
            </div>
        </div>
    </div>
)

const Contacts = () => (
    <StaticQuery 
        query={graphql`
        {
            allContentfulContact {
              edges {
                node {
                  name
                  content
                }
              }
            }
          }
        `}
        render={({
            allContentfulContact: {
                edges
            }
        }) => (
            edges.reverse().map(({ node }, index) => (
               <div key={index} className="main-footer__item main-footer__logo">
               {console.log(node)}
                   <Header title={node.name} />
                    <Item 
                        name={  node.name === "Телефон" ? "Моб" : 
                                node.name === "Почта" ? "Email" :
                                "Адрес" }
                        url={   node.name === "Телефон" ? `tel:${node.content}` :
                                node.name === "Почта" ? `malito:${node.content}` :
                                `${node.content}`} 
                        content={node.content} />
               </div>
            ))
        )}
    />
)

const Footer = () => (
    <Wrapper>
        <LogoBlock />
        <Contacts />
    </Wrapper>
)

export default Footer