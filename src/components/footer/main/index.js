import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './style.css'
import Logo from '../../logo/logo'
import background from '../../../images/sity.jpg'

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
            edges.map(({ node }, index) => (
               <div key={index} className="main-footer__item main-footer__logo">
                   <Header title={node.name} />
                    <Item 
                        name={  index === 0 ? "Моб" : 
                                index === 1 ? "Email" :
                                "Адрес" }
                        url={   index === 0 ? `tel:${node.content}` :
                                index === 1 ? `malito:${node.content}` :
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